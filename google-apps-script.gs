/**
 * JNVST Class 9 Mock Test 2027–28 — Google Apps Script email receiver
 *
 * 1. Create a new Google Apps Script project.
 * 2. Paste this file.
 * 3. Change OWNER_EMAIL to the Gmail address that should receive submissions.
 * 4. Deploy > New deployment > Web app.
 *    Execute as: Me
 *    Who has access: Anyone
 * 5. Copy the /exec URL into EMAIL_ENDPOINT in app.js.
 *
 * The browser sends only objective answers to this endpoint.
 */

const OWNER_EMAIL = "navodaya2152@gmail.com";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents || "{}");
    const c = data.candidate || {};
    const o = data.objective || {};
    const answers = o.answers || [];

    let body = "";
    body += "CLASS 9 JNVST CLASS 9 MOCK TEST 2027–28\n\n";
    body += "Candidate: " + (c.name || "") + "\n";
    body += "Parent: " + (c.parent || "") + "\n";
    body += "Location: " + (c.location || "") + "\n";
    body += "Roll No.: " + (c.roll || "") + "\n";
    body += "Mobile: " + (c.mobile || "") + "\n";
    body += "Submitted: " + (data.submittedAt || "") + "\n";
    body += "Time Spent: " + Math.floor((data.timeSpentSeconds || 0) / 60) + " min\n";
    body += "Objective Score: " + (o.score || 0) + " / " + (o.totalMarks || 0) + "\n\n";
    body += "OBJECTIVE ANSWERS\n";
    body += "=================\n";

    answers.forEach(function(a) {
      body += "\nQ" + a.id + " | " + a.subject + "\n";
      body += "Question: " + a.question + "\n";
      var selectedIndex = (typeof a.selectedIndex === "number") ? a.selectedIndex : null;
      var correctIndex = (typeof a.correctIndex === "number") ? a.correctIndex : null;
      var isCorrect = selectedIndex !== null && correctIndex !== null && selectedIndex === correctIndex;
      body += "Candidate Answer: " + (a.selectedText || "Unanswered") + (a.selectedOptionLetter ? " [" + a.selectedOptionLetter + "]" : "") + "\n";
      body += "Correct Answer: " + (a.correctAnswer || "Not available") + (a.correctOptionLetter ? " [" + a.correctOptionLetter + "]" : "") + "\n";
      body += "Result: " + (isCorrect ? "सही" : "गलत") + "\n";
    });

    MailApp.sendEmail({
      to: OWNER_EMAIL,
      subject: "Class 9 Test — " + (c.name || "Candidate") + " — Roll " + (c.roll || ""),
      body: body
    });

    return ContentService
      .createTextOutput(JSON.stringify({ok: true}))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ok: false, error: String(err)}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
