# JNVST Class 9 Mock Test 2027–28 — Automatic Email Setup

## What changed
- Removed the student-facing “परिणाम मेरे ईमेल...” button.
- Objective answers are prepared automatically at submission.
- The browser POSTs the submission to a Google Apps Script Web App.
- Google Apps Script emails the objective answers to the owner's Gmail.
- Added 15 detailed exam instructions.
- Improved mobile layout, touch targets, typography, palette and scrolling.

## One-time email setup
1. Open Google Apps Script and create a project.
2. Paste `google-apps-script.gs`.
3. Set `OWNER_EMAIL` to the Gmail inbox that should receive submissions.
4. Deploy it as a Web app:
   - Execute as: Me
   - Who has access: Anyone
5. Copy the deployed `/exec` URL.
6. Open `app.js` and set:
   `const EMAIL_ENDPOINT = "YOUR_WEB_APP_EXEC_URL";`
7. Upload the project to your hosting service.

Important: the ZIP intentionally leaves `EMAIL_ENDPOINT` blank until you deploy the backend. Do not claim email delivery is active until the URL is configured.


## Important after backend changes
After changing `google-apps-script.gs`, redeploy the Google Apps Script Web App so the /exec endpoint uses the updated code. The GitHub file change alone does not update an already deployed Apps Script version.
