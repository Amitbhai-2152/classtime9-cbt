// Google Apps Script Web App endpoint.
// Deploy the supplied google-apps-script.gs as a Web App and paste its /exec URL here.
const EMAIL_ENDPOINT = "https://script.google.com/macros/s/AKfycbx341brEbkoRCD-vzkrDtUIGH81NvY7xMoHngv82D0pOJv_ozE5iZlgtuwrzbfdUxAQ/exec";
let emailSubmissionStatus = "pending";

// यह कोड QUESTIONS एरे के लोड होने के बाद काम करेगा
const userProfile = { name: "", parent: "", location: "", roll: "", mobile: "" };
let currentIndex = 0;
let studentResponses = [];

// Phase 1: local auto-recovery. This keeps an unfinished exam on the same device.
const RECOVERY_KEY = "class9_cbt_active_exam_v1";
const RECOVERY_VERSION = 1;
let examStarted = false;
let examDeadlineMs = null;
let recoverySaveTimer = null;
let recoveryRestored = false;

function saveExamRecovery() {
  if (!examStarted || !studentResponses.length) return;
  try {
    const state = {
      version: RECOVERY_VERSION,
      savedAt: Date.now(),
      userProfile: { ...userProfile },
      currentIndex,
      studentResponses,
      examStarted: true,
      examDeadlineMs,
      timeElapsedSeconds
    };
    localStorage.setItem(RECOVERY_KEY, JSON.stringify(state));
  } catch (error) {
    console.warn("Could not save exam recovery state:", error);
  }
}

function readExamRecovery() {
  try {
    const raw = localStorage.getItem(RECOVERY_KEY);
    if (!raw) return null;
    const state = JSON.parse(raw);
    if (!state || state.version !== RECOVERY_VERSION || !state.examStarted || !state.examDeadlineMs) return null;
    // Keep an expired recovery state long enough to finalize it safely on reload.
    // This prevents a submission from being lost if the browser was closed near the deadline.
    return state;
  } catch (error) {
    console.warn("Could not read exam recovery state:", error);
    return null;
  }
}

function clearExamRecovery() {
  try {
    localStorage.removeItem(RECOVERY_KEY);
  } catch (error) {
    console.warn("Could not clear exam recovery state:", error);
  }
}

function scheduleRecoverySave() {
  clearTimeout(recoverySaveTimer);
  recoverySaveTimer = setTimeout(saveExamRecovery, 100);
}

function restoreExamState(state) {
  if (!state || !Array.isArray(state.studentResponses) || state.studentResponses.length !== QUESTIONS.length) return false;

  Object.assign(userProfile, state.userProfile || {});
  studentResponses = state.studentResponses.map((resp, idx) => ({
    id: QUESTIONS[idx].id,
    selectedOption: resp.selectedOption ?? null,
    writtenInCopy: Boolean(resp.writtenInCopy),
    status: resp.status || "not-visited"
  }));
  currentIndex = Math.min(Math.max(Number(state.currentIndex) || 0, 0), QUESTIONS.length - 1);
  examDeadlineMs = Number(state.examDeadlineMs);
  timeElapsedSeconds = Math.max(0, Number(state.timeElapsedSeconds) || 0);
  totalSeconds = Math.max(0, Math.ceil((examDeadlineMs - Date.now()) / 1000));
  examStarted = true;
  recoveryRestored = true;
  return true;
}

// Initialize responses once QUESTIONS array is available from questions.js.
// If an unfinished exam exists, restore it instead of creating a blank attempt.
window.onload = () => {
  const savedState = readExamRecovery();
  if (savedState && restoreExamState(savedState)) {
    document.getElementById('examHeaderName').innerText = userProfile.name || "छात्र का नाम";

    // If the recovered attempt already reached its deadline while the tab was closed,
    // finalize it immediately instead of discarding the attempt.
    if (examDeadlineMs <= Date.now()) {
      finalizeSubmission();
      return;
    }

    const recoveryNotice = document.getElementById('recoveryNotice');
    if (recoveryNotice) recoveryNotice.style.display = 'block';
  } else {
    studentResponses = QUESTIONS.map(q => ({ id: q.id, selectedOption: null, writtenInCopy: false, status: 'not-visited' }));
  }
};

// JNVST Mock Test duration: 2 घंटे 30 मिनट = 150 मिनट
const TEST_DURATION_SECONDS = 2.5 * 60 * 60;
let totalSeconds = TEST_DURATION_SECONDS;
let timerInterval = null;
let timeElapsedSeconds = 0;
let selectedSubjectFilter = "All";

const subjectsList = ["All", "गणित", "सामान्य विज्ञान", "English", "हिंदी"];

function goToScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
}

function handleRegistration(e) {
  e.preventDefault();
  userProfile.name = document.getElementById('candidateName').value;
  userProfile.parent = document.getElementById('parentName').value;
  userProfile.location = document.getElementById('liveLocation').value;
  userProfile.roll = document.getElementById('rollNo').value;
  userProfile.mobile = document.getElementById('mobileNo').value;

  // If an unfinished exam is already present, do not overwrite it with a new registration.
  const savedState = readExamRecovery();
  if (savedState && recoveryRestored) {
    document.getElementById('examHeaderName').innerText = userProfile.name;
    goToScreen('screen-instructions');
    return;
  }

  document.getElementById('examHeaderName').innerText = userProfile.name;
  goToScreen('screen-instructions');
}

function startTest() {
  if (recoveryRestored && examStarted) {
    resumeTest();
    return;
  }

  studentResponses = QUESTIONS.map(q => ({ id: q.id, selectedOption: null, writtenInCopy: false, status: 'not-visited' }));
  currentIndex = 0;
  timeElapsedSeconds = 0;
  totalSeconds = TEST_DURATION_SECONDS;
  examDeadlineMs = Date.now() + totalSeconds * 1000;
  examStarted = true;
  recoveryRestored = false;
  saveExamRecovery();

  goToScreen('screen-exam');
  buildSubjectPills();
  buildPaletteGrid();
  loadQuestion(0);
  startTimer();
}

function resumeTest() {
  if (!examStarted || !examDeadlineMs) return startTest();
  totalSeconds = Math.max(0, Math.ceil((examDeadlineMs - Date.now()) / 1000));
  if (totalSeconds <= 0) {
    finalizeSubmission();
    return;
  }
  document.getElementById('examHeaderName').innerText = userProfile.name || "छात्र का नाम";
  goToScreen('screen-exam');
  buildSubjectPills();
  buildPaletteGrid();
  loadQuestion(currentIndex);
  startTimer();
  recoveryRestored = false;
}

function startTimer() {
  clearInterval(timerInterval);
  totalSeconds = Math.max(0, Math.ceil((examDeadlineMs - Date.now()) / 1000));
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    totalSeconds = Math.max(0, Math.ceil((examDeadlineMs - Date.now()) / 1000));
    timeElapsedSeconds = Math.max(0, Math.floor((Date.now() - (examDeadlineMs - TEST_DURATION_SECONDS * 1000)) / 1000));
    updateTimerDisplay();
    saveExamRecovery();
    if (totalSeconds <= 0) {
      clearInterval(timerInterval);
      finalizeSubmission();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const hrs = Math.floor(totalSeconds / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;
  const timer = document.getElementById('timerDisplay');
  if (timer) timer.innerText = `${String(hrs).padStart(2,'0')}:${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;
}

function buildSubjectPills() {
  const container = document.getElementById('sectionPillsContainer');
  container.innerHTML = "";
  subjectsList.forEach(sub => {
    const btn = document.createElement('button');
    btn.className = `pill-btn ${sub === selectedSubjectFilter ? 'active' : ''}`;
    btn.innerText = sub === "All" ? "सभी विषय" : sub;
    btn.onclick = () => {
      selectedSubjectFilter = sub;
      buildSubjectPills(); buildPaletteGrid();
      if(sub !== "All") loadQuestion(QUESTIONS.findIndex(q => q.subject === sub));
    };
    container.appendChild(btn);
  });
}

function buildPaletteGrid() {
  const grid = document.getElementById('paletteGrid');
  grid.innerHTML = "";
  QUESTIONS.forEach((q, idx) => {
    if (selectedSubjectFilter !== "All" && q.subject !== selectedSubjectFilter) return;
    const btn = document.createElement('button');
    btn.className = `palette-btn status-${studentResponses[idx].status} ${idx === currentIndex ? 'active-q' : ''}`;
    btn.innerText = q.id;
    btn.onclick = () => loadQuestion(idx);
    grid.appendChild(btn);
  });
}

function loadQuestion(index) {
  if (studentResponses[currentIndex].status === 'not-visited') studentResponses[currentIndex].status = 'unanswered';
  currentIndex = index;
  const q = QUESTIONS[currentIndex];
  const resp = studentResponses[currentIndex];
  if (resp.status === 'not-visited') resp.status = 'unanswered';

  document.getElementById('questionTitle').innerText = `प्रश्न ${q.id} [${q.subject}]`;
  document.getElementById('questionMarksTag').innerText = `${q.marks} अंक`;

  const questionText = document.getElementById('questionText');
  questionText.innerHTML = "";
  if (q.passage) {
    const passageBox = document.createElement('div');
    passageBox.className = 'passage-box';

    const passageLabel = document.createElement('div');
    passageLabel.className = 'passage-label';
    passageLabel.innerText = q.subject === 'हिंदी' ? 'अपठित गद्यांश' : 'READING PASSAGE';

    const passageText = document.createElement('div');
    passageText.className = 'passage-text';
    passageText.innerText = String(q.passage || '')
      .replace(/\\n/g, '\n')
      .replace(/\\\\n/g, '\n')
      .replace(/\/n/g, '\n');

    passageBox.appendChild(passageLabel);
    passageBox.appendChild(passageText);
    questionText.appendChild(passageBox);

    const prompt = document.createElement('div');
    prompt.className = 'question-prompt';
    prompt.innerText = String(q.question || '')
      .replace(/\\n/g, '\n')
      .replace(/\\\\n/g, '\n')
      .replace(/\/n/g, '\n');
    questionText.appendChild(prompt);
  } else {
    questionText.innerText = q.question;
  }

  const area = document.getElementById('answerInteractionArea');
  area.innerHTML = "";

  if (q.type === 'mcq') {
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'options-container';
    q.options.forEach((opt, optIdx) => {
      const optItem = document.createElement('div');
      const isSelected = resp.selectedOption === optIdx;
      optItem.className = `option-item ${isSelected ? 'selected' : ''}`;
      optItem.innerHTML = `<input type="radio" name="mcq" id="o_${optIdx}" ${isSelected ? 'checked' : ''}><label for="o_${optIdx}">(${String.fromCharCode(97 + optIdx)}) ${opt}</label>`;
      optItem.onclick = () => selectOption(optIdx);
      optionsDiv.appendChild(optItem);
    });
    area.appendChild(optionsDiv);
  } else {
    area.innerHTML = `
      <div class="subjective-instruction-box">
        <h4>✍️ सब्जेक्टिव प्रश्न</h4>
        <p>इस प्रश्न का उत्तर अपनी कॉपी में विस्तार से लिखें।</p>
        <label class="written-checkbox-label">
          <input type="checkbox" ${resp.writtenInCopy ? 'checked' : ''} onchange="toggleWrittenInCopy(this.checked)"> मैंने कॉपी में उत्तर लिख लिया है
        </label>
      </div>`;
  }
  document.getElementById('prevBtn').disabled = (currentIndex === 0);
  buildPaletteGrid();
  scheduleRecoverySave();
}

function selectOption(optIdx) {
  studentResponses[currentIndex].selectedOption = optIdx;
  studentResponses[currentIndex].status = 'answered';
  scheduleRecoverySave();
  loadQuestion(currentIndex);
}

function toggleWrittenInCopy(isChecked) {
  studentResponses[currentIndex].writtenInCopy = isChecked;
  studentResponses[currentIndex].status = isChecked ? 'answered' : 'unanswered';
  scheduleRecoverySave();
  buildPaletteGrid();
}

function saveAndNext() {
  scheduleRecoverySave();
  if (currentIndex < QUESTIONS.length - 1) loadQuestion(currentIndex + 1);
}

function navigateQuestion(delta) {
  scheduleRecoverySave();
  if (currentIndex + delta >= 0 && currentIndex + delta < QUESTIONS.length) loadQuestion(currentIndex + delta);
}

function markForReview() {
  studentResponses[currentIndex].status = 'review';
  scheduleRecoverySave();
  if (currentIndex < QUESTIONS.length - 1) loadQuestion(currentIndex + 1);
  else buildPaletteGrid();
}

function clearCurrentResponse() {
  studentResponses[currentIndex].status = 'unanswered';
  studentResponses[currentIndex].selectedOption = null;
  studentResponses[currentIndex].writtenInCopy = false;
  scheduleRecoverySave();
  loadQuestion(currentIndex);
}

function confirmSubmitTest() {
  if (confirm("क्या आप वाकई परीक्षा सबमिट करना चाहते हैं?")) finalizeSubmission();
}

function buildSubmissionPayload() {
  const objectiveQuestions = QUESTIONS.filter(q => q.type === "mcq");
  const answers = objectiveQuestions.map(q => {
    const idx = QUESTIONS.findIndex(item => item.id === q.id);
    const selected = studentResponses[idx]?.selectedOption;
    return {
      id: q.id,
      subject: q.subject,
      section: q.section || "",
      passage: q.passage || "",
      question: q.question,
      selectedIndex: selected,
      selectedText: selected !== null && selected !== undefined ? q.options[selected] : "",
      selectedOptionLetter: selected !== null && selected !== undefined ? String.fromCharCode(65 + selected) : "",
      correctIndex: q.correct,
      correctAnswer: q.options[q.correct],
      correctOptionLetter: String.fromCharCode(65 + q.correct),
      isCorrect: selected === q.correct,
      marks: q.marks
    };
  });

  const score = answers.reduce((sum, a) => sum + (a.isCorrect ? a.marks : 0), 0);

  return {
    testName: "JNVST कक्षा 9 मॉक टेस्ट 2027–28",
    submittedAt: new Date().toISOString(),
    candidate: {
      name: userProfile.name,
      parent: userProfile.parent,
      location: userProfile.location,
      roll: userProfile.roll,
      mobile: userProfile.mobile
    },
    timeSpentSeconds: timeElapsedSeconds,
    objective: {
      score,
      totalMarks: objectiveQuestions.reduce((sum, q) => sum + q.marks, 0),
      answers
    }
  };
}

async function submitObjectiveAnswersAutomatically() {
  const payload = buildSubmissionPayload();

  // If the endpoint is not configured yet, do not pretend that an email was sent.
  if (!EMAIL_ENDPOINT) {
    emailSubmissionStatus = "not-configured";
    return;
  }

  try {
    await fetch(EMAIL_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload)
    });
    emailSubmissionStatus = "sent";
  } catch (error) {
    console.error("Automatic email submission failed:", error);
    emailSubmissionStatus = "failed";
  }
}

function finalizeSubmission() {
  clearInterval(timerInterval);
  clearTimeout(recoverySaveTimer);

  const objectiveQuestions = QUESTIONS.filter(q => q.type === "mcq");
  let mcqScore = 0;
  QUESTIONS.forEach((q, i) => {
    if (q.type === "mcq" && studentResponses[i].selectedOption === q.correct) {
      mcqScore += q.marks;
    }
  });

  // Mark the attempt as submitted by removing the active recovery state.
  clearExamRecovery();
  examStarted = false;
  examDeadlineMs = null;

  goToScreen('screen-summary');

  const totalMcqMarks = objectiveQuestions.reduce((sum, q) => sum + q.marks, 0);
  const attempted = QUESTIONS.reduce((sum, q, i) =>
    sum + (q.type === "mcq" && studentResponses[i].selectedOption !== null && studentResponses[i].selectedOption !== undefined ? 1 : 0), 0);
  const wrong = Math.max(0, attempted - mcqScore);
  const unanswered = QUESTIONS.length - attempted;
  const percentage = totalMcqMarks ? ((mcqScore / totalMcqMarks) * 100).toFixed(1).replace(/\.0$/, "") : "0";

  document.getElementById('statMcqScore').innerText = `${mcqScore} / ${totalMcqMarks}`;
  document.getElementById('statPercentage').innerText = `${percentage}%`;
  document.getElementById('statAttempted').innerText = `${attempted} / ${QUESTIONS.length}`;
  document.getElementById('statUnanswered').innerText = String(unanswered);
  document.getElementById('statWrong').innerText = String(wrong);

  const subjectScoreBreakdown = document.getElementById('subjectScoreBreakdown');
  if (subjectScoreBreakdown) {
    subjectScoreBreakdown.innerHTML = "";
    const subjectTotals = {};
    const subjectScores = {};
    QUESTIONS.forEach((q, i) => {
      subjectTotals[q.subject] = (subjectTotals[q.subject] || 0) + q.marks;
      if (q.type === "mcq" && studentResponses[i].selectedOption === q.correct) {
        subjectScores[q.subject] = (subjectScores[q.subject] || 0) + q.marks;
      }
    });
    Object.keys(subjectTotals).forEach(subject => {
      const box = document.createElement('div');
      box.className = 'stat-box';
      const score = subjectScores[subject] || 0;
      box.innerHTML = `<div style="font-size:16px;font-weight:800;">${score} / ${subjectTotals[subject]}</div><div style="font-size:12px;margin-top:5px;">${subject}</div>`;
      subjectScoreBreakdown.appendChild(box);
    });
  }

  const m = Math.floor(timeElapsedSeconds / 60);
  const s = timeElapsedSeconds % 60;
  document.getElementById('statTimeSpent').innerText = `${m} मिनट ${s} सेकंड`;

  const statusEl = document.getElementById('emailStatus');
  if (statusEl) {
    statusEl.innerText = "आपके ऑब्जेक्टिव उत्तर सुरक्षित रूप से दर्ज किए जा रहे हैं…";
  }

  // Email submission happens automatically; there is no student-facing email button.
  submitObjectiveAnswersAutomatically().then(() => {
    if (!statusEl) return;

    if (emailSubmissionStatus === "sent") {
      statusEl.innerText = "✓ आपके सभी ऑब्जेक्टिव उत्तर शिक्षक के ईमेल पर भेज दिए गए हैं।";
      statusEl.className = "email-status success";
    } else if (emailSubmissionStatus === "not-configured") {
      statusEl.innerText = "⚠️ ईमेल डिलीवरी अभी कॉन्फ़िगर नहीं है। प्रश्नों का परिणाम स्क्रीन पर सुरक्षित है।";
      statusEl.className = "email-status warning";
    } else {
      statusEl.innerText = "⚠️ ईमेल भेजने में समस्या हुई। कृपया शिक्षक से संपर्क करें।";
      statusEl.className = "email-status error";
    }
  });
}
