import { test, expect, chromium, Page, Locator } from '@playwright/test';

test('store login session', async ({ page }) => {
    await page.goto('https://aayushmishra.tech/ecommerceautomation/index.php?route=account/login');
    await page.locator('#input-email').fill('aayushmishr@gmail.com');
    await page.locator('#input-password').fill('aayushmishr@gmail.com');
    await page.locator('[type="submit"]').nth(1).click();
    await page.waitForURL('https://aayushmishra.tech/ecommerceautomation/index.php?route=account/login');

    await page.context().storageState({ path: 'auth/session.json' });
})