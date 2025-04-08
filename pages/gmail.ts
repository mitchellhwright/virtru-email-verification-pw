import { expect, type Locator, type Page } from '@playwright/test';

export class Gmail {
    readonly page: Page;
    readonly activateButton: Locator;
    readonly doneButton: Locator;
    readonly compoaeButton: Locator;
    readonly virtruToggle: Locator;
    readonly toField: Locator;
    readonly subjectField: Locator;
    readonly emailBody: Locator;
    readonly sendButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.activateButton = page.locator('//button[text()="Activate"]');
        this.doneButton = page.locator('//button[text()="Done"]');
        this.compoaeButton = page.locator('//*[contains(text(),"Compose")]');
        this.virtruToggle = page.locator('//div[@aria-label="Virtru secure toggle"]');
        this.toField = page.locator('input[aria-label="To recipients"]');
        this.subjectField = page.locator('input[aria-label="Subject"]');
        this.emailBody = page.locator('div[role="textbox"]');
        this.sendButton = page.locator('//div[contains(@aria-label, "Send") and @role="button"]').first();
    }

    async goto() {
        await this.page.goto('https://mail.google.com/');
        await this.page.bringToFront();
    }

    async activateVirtruExtension() {
        // Activate Virtru extension
        await this.activateButton.isVisible();
        await this.activateButton.click();
        await this.doneButton.isVisible();
        await this.doneButton.click();
        await this.page.bringToFront();
    }

    async composeEmail(email: string, subject: string, content: string) {
        await this.compoaeButton.isEnabled();
        await this.compoaeButton.click();
        // Fill in the Email Details
        await this.virtruToggle.isVisible();
        await this.virtruToggle.click();
        await this.toField.fill(email);
        await this.subjectField.fill(subject);
        await this.emailBody.fill(content);
    }

    async sendEmail() {
        await this.sendButton.isEnabled();
        await this.sendButton.click();
    }

    async verifyDecryptedBody(subject: string, content: string) {
        await this.page.click(`(//span[contains(text(), "${subject}")])[2]`);
        // see decrypted email content in trace/video
        await this.page.waitForTimeout(4000);
        // verify email body decrypted and matches what was sent
        await expect(this.page.getByRole('listitem').getByText(content)).toBeVisible();
    }
}