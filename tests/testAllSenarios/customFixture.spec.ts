/**
 * Custom Fixtures
When inbuilt ones aren’t enough, you can create your own fixtures — for example:
Logged-in page
Database connection
Test data loader
API client, etc.
Custom fixtures are created using test.extend().
 */

import { test as base, expect, Page } from '@playwright/test';

let test = base.extend<{ loginPage: Page }>({

    loginPage: async ({ browser }, use) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    
    await page.goto('https://naveenautomationlabs.com/opencart/');
    await page.click('text=My Account');
    await page.click('text=Login');
    await page.fill('#input-email', 'testuser@example.com');
    await page.fill('#input-password', 'Password123');
    await page.click('input[value="Login"]');

        await use(page);
        await context.close();

    }

});

test('invalid login', async ({ loginPage }) => {
    await expect( loginPage.locator(`#account-login > div.alert`)).toBeVisible();
})