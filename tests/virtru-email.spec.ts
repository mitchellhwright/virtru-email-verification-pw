import { test, expect } from '../fixtures/fixtures';

test('virtru email verification', async ({ page }) => {
  test.slow();
``
  // show Virtru extension installation page
  await page.waitForTimeout(2000);

  await test.step('Navigate to Google login page', async () => {
    await page.goto('https://accounts.google.com/signin');
  });
  await page.bringToFront();

  await page.fill('input[type="email"]', 'virtrumitch@gmail.com');
  await page.click('button:has-text("Next")');

  // Wait for the password field to be visible and enter the password
  await page.waitForSelector('input[type="password"]', { state: 'visible' });
  await page.fill('input[type="password"]', 'Test!234');
  await page.click('button:has-text("Next")');

  // Wait for navigation to complete
  await page.waitForNavigation();

  // You are now logged in
  console.log('Logged in successfully!');
  await page.goto('https://mail.google.com/');
  await page.bringToFront();
  await page.click('//button[text()="Activate"]');
  await page.click('//button[text()="Done"]');

  await page.bringToFront();

  await test.step('Verify Gmail Page visibility', async () => {
    await expect(page.getByRole('link', { name: 'Gmail', exact: true })).toBeVisible();
  });

  await page.click('//*[contains(text(),"Compose")]'); // Replace with the actual selector

  // 3. Fill in the Email Details
  await page.click('//div[@aria-label="Virtru secure toggle"]')
  await page.locator('input[aria-label="To recipients"]').fill('virtrumitch@gmail.com'); // Replace with the actual selector
  const emailSubject = 'Test Email ' + Date.now();
  await page.locator('input[aria-label="Subject"]').fill(emailSubject); // Replace with the actual selector

  const emailContent = 'This is a test email on: ' + Date.now();
  await page.locator('div[role="textbox"]').fill(emailContent); // Replace with the actual selector

  // 4. Send the Email
  await page.locator('//div[contains(@aria-label, "Send") and @role="button"]').first().click();
  await page.click(`(//span[contains(text(), "${emailSubject}")])[2]`);
  // await page.fill('input[aria-label="To recipients"]', 'virtrumitch@gmail.com');
  // await page.waitForNavigation();

  await test.step('Verify Email Content', async () => {
    await expect(page.getByRole('listitem').getByText(emailContent)).toBeVisible();
  });
  // Close the browser
  await page.close();
});