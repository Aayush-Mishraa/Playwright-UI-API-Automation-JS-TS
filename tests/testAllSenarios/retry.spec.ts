import { test, expect } from '@playwright/test';

test('title test', async ({ page, browserName }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await expect(page).toHaveTitle('Account Login11');
});

//hooks --> before, after
//fixtures
//data driven
//tags --> @sanity, @regression, @search