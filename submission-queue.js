// Phase 3: durable submission queue.
// Final submissions are kept locally until the email request can be handed to the endpoint.
const SUBMISSION_QUEUE_KEY = "class9_cbt_submission_queue_v1";
const SUBMISSION_QUEUE_VERSION = 1;
const MAX_QUEUED_SUBMISSIONS = 5;

function readSubmissionQueue() {
  try {
    const raw = localStorage.getItem(SUBMISSION_QUEUE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(item => item && item.version === SUBMISSION_QUEUE_VERSION && item.payload);
  } catch (error) {
    console.warn("Could not read submission queue:", error);
    return [];
  }
}

function writeSubmissionQueue(queue) {
  try {
    localStorage.setItem(SUBMISSION_QUEUE_KEY, JSON.stringify(queue.slice(-MAX_QUEUED_SUBMISSIONS)));
  } catch (error) {
    console.warn("Could not write submission queue:", error);
  }
}

function queueSubmission(payload) {
  const queue = readSubmissionQueue();
  const id = payload.submissionId || `submission-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  const existing = queue.findIndex(item => item.id === id);
  const item = {
    version: SUBMISSION_QUEUE_VERSION,
    id,
    queuedAt: Date.now(),
    payload: { ...payload, submissionId: id }
  };

  if (existing >= 0) queue[existing] = item;
  else queue.push(item);
  writeSubmissionQueue(queue);
  return id;
}

function removeQueuedSubmission(id) {
  writeSubmissionQueue(readSubmissionQueue().filter(item => item.id !== id));
}

async function sendQueuedSubmission(item) {
  if (!navigator.onLine || !EMAIL_ENDPOINT) return false;
  try {
    const response = await fetch(EMAIL_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(item.payload)
    });

    // no-cors intentionally returns an opaque response. A fulfilled fetch means the
    // browser completed the network hand-off, but the server response cannot be inspected.
    if (response && response.type === "opaque") {
      removeQueuedSubmission(item.id);
      return true;
    }
    if (response && response.ok) {
      removeQueuedSubmission(item.id);
      return true;
    }
  } catch (error) {
    console.warn("Queued submission retry failed:", error);
  }
  return false;
}

async function retryQueuedSubmissions() {
  if (!navigator.onLine) return;
  const queue = readSubmissionQueue();
  for (const item of queue) {
    await sendQueuedSubmission(item);
  }
}

function updateSubmissionQueueStatus(message, className) {
  const statusEl = document.getElementById("emailStatus");
  if (!statusEl) return;
  statusEl.innerText = message;
  statusEl.className = `email-status ${className || ""}`.trim();
}

// Wrap the existing sender so the original exam flow remains unchanged.
const originalSubmitObjectiveAnswersAutomatically = window.submitObjectiveAnswersAutomatically;
if (typeof originalSubmitObjectiveAnswersAutomatically === "function") {
  window.submitObjectiveAnswersAutomatically = async function () {
    const originalBuildSubmissionPayload = window.buildSubmissionPayload;
    let payload = originalBuildSubmissionPayload();
    if (!payload.submissionId) {
      payload = {
        ...payload,
        submissionId: `submission-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
      };
    }
    queueSubmission(payload);

    // Make the existing sender transmit exactly the queued payload, including its ID.
    window.buildSubmissionPayload = () => payload;
    try {
      await originalSubmitObjectiveAnswersAutomatically();
    } finally {
      window.buildSubmissionPayload = originalBuildSubmissionPayload;
    }

    if (emailSubmissionStatus === "sent") {
      removeQueuedSubmission(payload.submissionId);
    }

    return emailSubmissionStatus;
  };
}

window.addEventListener("online", () => {
  retryQueuedSubmissions().then(() => {
    if (readSubmissionQueue().length === 0) {
      updateSubmissionQueueStatus("✓ आपके ऑब्जेक्टिव उत्तर शिक्षक के ईमेल पर भेज दिए गए हैं।", "success");
    }
  });
});

window.addEventListener("load", () => {
  // A submission can remain here if the device went offline immediately after submit.
  setTimeout(() => retryQueuedSubmissions(), 300);
});
