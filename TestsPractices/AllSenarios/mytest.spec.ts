import { test, expect } from '@playwright/test';

test('title test', async ({ page, browserName }) => {
    //test.skip(browserName === 'firefox', 'Feature is not supported in Firefox');
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await expect(page).toHaveTitle('Account Login1', {timeout: 50000});
});

test('url test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await expect(page).toHaveURL(/.*account\/login.*/)
});

test('header is visible', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await expect(page.getByText('Returning Customer', { exact: true })).toBeVisible();
});

test('emailid is visible', async ({ page, browserName }) => {
    test.slow(browserName === 'firefox', 'This feature is slow in firefox');
   // test.slow();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await expect(page.getByRole('textbox', { name: 'E-Mail Address' })).toBeVisible();
});


test.fixme('password is visible', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await expect(page.getByRole('textbox', { name: 'Password' })).toBeVisible();
});


test('new customer header is visible', async ({ page }) => {
    test.fail();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await expect(page.getByText('New Customer11', { exact: true })).toBeVisible();
});




test('password ele is visible', async ({ page }) => {
    test.step('go to page url', async () => {
        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    });
    test.step('check password element', async () => {
        await expect(page.getByRole('textbox', { name: 'Password' })).toBeVisible();
    });
});
