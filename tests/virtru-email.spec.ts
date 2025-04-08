import { test, expect } from '../fixtures/fixtures';
import { GoogleSignon } from '../pages/google-signon';
import { Gmail } from '../pages/gmail'


const emailAddress = process.env.EMAIL_ADDRESS || 'set EMAIL_ADDRESS in .env file';
const googlePwd = process.env.GOOGLE_PWD || 'set GOOGLE_PWD in .env file';
const googleName = process.env.GOOGLE_NAME || 'set GOOGLE_NAME in .env file';

test('virtru email verification', async ({ page }) => {
  // show Virtru extension installation page and allow time to install extension
  await page.waitForTimeout(4000);

  // login to Google test account
  await test.step('Navigate to Google login page', async () => {
    const googleSignon = new GoogleSignon(page);
    await googleSignon.goto();
    await googleSignon.signIntoGoogle(emailAddress, googlePwd);
    await googleSignon.checkWelcomePage(googleName);
  });

  const gmail = new Gmail(page);

  await test.step('Verify Virtru Gmail Extension is active', async () => {
    // Goto Gmail and activate Virtru extension
    await gmail.goto();
    await gmail.activateVirtruExtension();
    await expect(page.getByRole('link', { name: 'Gmail', exact: true })).toBeVisible();
  });

  const emailDate = Date.now();
  const emailSubject = `Test Email ${emailDate}`;
  const emailContent = `This is a test email written on: ${emailDate}`;

  await test.step('Compose email with Virtru encryption ON', async () => {
    // Compose and Fill in the Email Details
    await gmail.composeEmail(emailAddress, emailSubject, emailContent);
    // Send Email
    await gmail.sendEmail();
  });

  // Verify email content was decrypted and matches what was sent
  await test.step('Verify Received Email Body is Decrypted', async () => {
    await gmail.verifyDecryptedBody(emailSubject, emailContent);
  });
});