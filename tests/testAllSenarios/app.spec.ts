import { test, expect } from '@playwright/test';


test.describe('login feature', () => {

    test.beforeAll(async ({ page }) => {
        console.log('check DB connection...and connect to DB');
        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    });
    
    // test.beforeEach(async ({ page}) => {
    //    console.log('==========Starting the Test==============');
    // });

    // test.beforeEach(async ({ page}) => {
    //    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    // });

    // test.afterEach(async ({ page }) => {
    //     await page.close();
    // });

    // test.afterEach(async ({ page}) => {
    //    console.log('==========Ending the Test==============');
    // });

    test.afterAll(async ({ page }) => {
         console.log('close the DB connection...');
        await page.close();
    });


    test('title Test', async ({ page }) => {
       await expect(page).toHaveTitle('Account Login');
    });

    test('header Test', async ({ page }) => {
       await expect(page.getByText('Returning Customer', { exact: true })).toBeVisible();
    });


});