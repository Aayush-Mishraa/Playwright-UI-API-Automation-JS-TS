import { test, expect, chromium, Page, Locator } from '@playwright/test';

test('store login session', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await page.locator('#input-email').fill('march2024@open.com');
    await page.locator('#input-password').fill('Selenium@12345');
    await page.locator('//input[@value="Login"]').click();
    await page.waitForURL('https://naveenautomationlabs.com/opencart/index.php?route=account/account');

    await page.context().storageState({ path: 'auth/session.json' });
})