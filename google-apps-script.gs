/**
 * ClassTime 9 — Teacher submission backend
 *
 * Setup:
 * 1. Put this code in the Apps Script project used by the CBT.
 * 2. Set TEACHER_API_KEY to a strong private value.
 * 3. Deploy/re-deploy as Web App: Execute as Me, access Anyone.
 * 4. Keep the /exec URL in app.js EMAIL_ENDPOINT.
 *
 * The script automatically creates a Google Sheet on first submission and
 * stores the complete submission payload there. The teacher-results.html page
 * reads the stored submissions through doGet using the private API key.
 */

const OWNER_EMAIL = "navodaya2152@gmail.com";
const TEACHER_API_KEY = "CHANGE_THIS_TO_A_PRIVATE_TEACHER_KEY";
const SHEET_PROPERTY = "CLASS9_CBT_SUBMISSION_SHEET_ID";
const SHEET_NAME = "Submissions";

function getSubmissionSheet_() {
  const props = PropertiesService.getScriptProperties();
  let id = props.getProperty(SHEET_PROPERTY);
  let ss;
  if (id) {
    try { ss = SpreadsheetApp.openById(id); } catch (e) { ss = null; }
  }
  if (!ss) {
    ss = SpreadsheetApp.create("ClassTime 9 — CBT Submissions");
    props.setProperty(SHEET_PROPERTY, ss.getId());
  }
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["submissionId","submittedAt","testId","testName","candidateName","parent","location","roll","mobile","score","totalMarks","subjectiveMarked","timeSpentSeconds","payloadJson"]);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function checkKey_(key) {
  return TEACHER_API_KEY && TEACHER_API_KEY !== "CHANGE_THIS_TO_A_PRIVATE_TEACHER_KEY" && key === TEACHER_API_KEY;
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents || "{}");
    const c = data.candidate || {};
    const o = data.objective || {};
    const answers = o.answers || [];
    const testName = data.testName || "ClassTime 9 — BSEB Class 9 Practice CBT";
    const submissionId = Utilities.getUuid();

    data.submissionId = submissionId;
    data.serverReceivedAt = new Date().toISOString();

    const sheet = getSubmissionSheet_();
    sheet.appendRow([
      submissionId,
      data.submittedAt || "",
      data.testId || "",
      testName,
      c.name || "",
      c.parent || "",
      c.location || "",
      c.roll || "",
      c.mobile || "",
      o.score || 0,
      o.totalMarks || 0,
      data.subjectiveMarked || 0,
      data.timeSpentSeconds || 0,
      JSON.stringify(data)
    ]);

    let body = "";
    body += testName + "\n\n";
    body += "Candidate: " + (c.name || "") + "\n";
    body += "Parent: " + (c.parent || "") + "\n";
    body += "Location: " + (c.location || "") + "\n";
    body += "Roll No.: " + (c.roll || "") + "\n";
    body += "Mobile: " + (c.mobile || "") + "\n";
    body += "Submitted: " + (data.submittedAt || "") + "\n";
    body += "Time Spent: " + Math.floor((data.timeSpentSeconds || 0) / 60) + " min\n";
    body += "Objective Score: " + (o.score || 0) + " / " + (o.totalMarks || 0) + "\n";
    body += "Subjective marked on copy: " + (data.subjectiveMarked || 0) + "\n\n";
    body += "TEACHER RESULT ID: " + submissionId + "\n";
    body += "Open the Teacher Results page and enter the private teacher key to review this submission.\n\n";
    body += "OBJECTIVE ANSWERS\n=================\n";
    answers.forEach(function(a) {
      var selectedIndex = (typeof a.selectedIndex === "number") ? a.selectedIndex : null;
      var correctIndex = (typeof a.correctIndex === "number") ? a.correctIndex : null;
      var isAnswered = selectedIndex !== null && selectedIndex !== undefined;
      var isCorrect = isAnswered && correctIndex !== null && selectedIndex === correctIndex;
      var resultLabel = !isAnswered ? "अनुत्तरित" : (isCorrect ? "सही" : "गलत");
      body += "\nQ" + a.id + " | " + a.subject + "\n";
      body += "Question: " + a.question + "\n";
      body += "Candidate Answer: " + (a.selectedText || "Unanswered") + (a.selectedOptionLetter ? " [" + a.selectedOptionLetter + "]" : "") + "\n";
      body += "Correct Answer: " + (a.correctAnswer || "Not available") + (a.correctOptionLetter ? " [" + a.correctOptionLetter + "]" : "") + "\n";
      body += "Result: " + resultLabel + "\n";
    });

    MailApp.sendEmail({
      to: OWNER_EMAIL,
      subject: testName + " — " + (c.name || "Candidate") + " — Roll " + (c.roll || ""),
      body: body
    });

    return ContentService.createTextOutput(JSON.stringify({ok:true,submissionId:submissionId})).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ok:false,error:String(err)})).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    const p = e && e.parameter ? e.parameter : {};
    if (!checkKey_(p.key)) {
      return json_({ok:false,error:"Unauthorized"});
    }
    const sheet = getSubmissionSheet_();
    const rows = sheet.getDataRange().getValues();
    if (rows.length <= 1) return json_({ok:true,submissions:[]});

    if (p.action === "get") {
      const id = String(p.id || "");
      for (let i = 1; i < rows.length; i++) {
        if (String(rows[i][0]) === id) {
          return json_({ok:true,submission:JSON.parse(rows[i][13] || "{}")});
        }
      }
      return json_({ok:false,error:"Submission not found"});
    }

    const submissions = rows.slice(1).reverse().map(function(r) {
      return {
        submissionId:String(r[0]), submittedAt:String(r[1]), testId:String(r[2]),
        testName:String(r[3]), candidateName:String(r[4]), roll:String(r[7]),
        score:Number(r[9] || 0), totalMarks:Number(r[10] || 0),
        subjectiveMarked:Number(r[11] || 0), timeSpentSeconds:Number(r[12] || 0)
      };
    });
    return json_({ok:true,submissions:submissions});
  } catch (err) {
    return json_({ok:false,error:String(err)});
  }
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
