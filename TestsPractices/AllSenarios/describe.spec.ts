import { test, expect } from '@playwright/test';


test.describe('basic test suite', () => {
    test('title test', async ({ page, browserName }) => {
        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
        await expect(page).toHaveTitle('Account Login');
    });

    test('url test', async ({ page }) => {
        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
        await expect(page).toHaveURL(/.*account\/login.*/)
    });

    test('header is visible', async ({ page }) => {
        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
        await expect(page.getByText('Returning Customer', { exact: true })).toBeVisible();
    });
});


test.describe('advance test suite', () => {
    test('emailid is visible', async ({ page, browserName }) => {
        test.slow(browserName === 'firefox', 'This feature is slow in firefox');
        // test.slow();
        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
        await expect(page.getByRole('textbox', { name: 'E-Mail Address' })).toBeVisible();
    });


    test('password is visible', async ({ page }) => {
        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
        await expect(page.getByRole('textbox', { name: 'Password' })).toBeVisible();
    });


    test('new customer header is visible', async ({ page }) => {
        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
        await expect(page.getByText('New Customer11', { exact: true })).toBeVisible();
    });
});



