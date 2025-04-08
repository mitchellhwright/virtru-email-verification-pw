import { expect, type Locator, type Page } from '@playwright/test';

export class GoogleSignon {
    readonly page: Page;
    readonly emailAddress: Locator;
    readonly nextButton: Locator;
    readonly password: Locator;
    readonly welcomePageHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailAddress = page.locator('input[type="email"]');
        this.nextButton = page.locator('button:has-text("Next")');
        this.password = page.locator('input[type="password"]');
        this.welcomePageHeader = page.locator('h1').first();
    }

    async goto() {
        await this.page.goto('https://accounts.google.com/signin');
        await this.page.bringToFront();
    }

    async signIntoGoogle(email: string, password: string) {
        // Wait for the email address field to be visible and enter it
        await expect(this.emailAddress).toBeVisible();
        await this.emailAddress.fill(email);
        await expect(this.nextButton).toBeEnabled();
        await this.nextButton.click();
        // Wait for the password field to be visible and enter the password
        await this.password.isVisible()
        await this.password.fill(password);
        await expect(this.nextButton).toBeEnabled();
        await this.nextButton.click();
        await this.welcomePageHeader.isVisible();
    }

    async checkWelcomePage(name: string) {
        // check for correct Name used in google account
        await expect(this.welcomePageHeader).toHaveText(`Welcome, ${name}`);
    }
}