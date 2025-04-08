import { test as base, chromium, type BrowserContext } from '@playwright/test';
import path from 'path';

// fixture to install Virtru extension from downloaded Virtru extension before test starts
export const test = base.extend<{
    context: BrowserContext;
    extensionId: string;
}>({
    context: async ({ }, use) => {
        const pathToExtension = path.join(__dirname, '..', '12.6.9_0');
        const context = await chromium.launchPersistentContext('', {
            channel: 'chromium',
            args: [
                `--disable-extensions-except=${pathToExtension}`,
                `--load-extension=${pathToExtension}`,
            ],
        });
        await use(context);
        await context.close();
    },
    extensionId: async ({ context }, use) => {
        // for manifest v3:
        let [background] = context.serviceWorkers();
        if (!background)
            background = await context.waitForEvent('serviceworker');

        const extensionId = background.url().split('/')[2];
        await use(extensionId);
    },
});
export const expect = test.expect;