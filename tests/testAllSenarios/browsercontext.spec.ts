import { test, expect, chromium, Page, Locator, Browser, BrowserContext } from '@playwright/test';

test('check page title', async () => {
    
    let browser:Browser =  await chromium.launch({ headless: false, channel: 'chrome' });

    // Create a new incognito browser context.
    let context1:BrowserContext = await browser.newContext();
    let context2: BrowserContext = await browser.newContext();
    
    let page1:Page = await context1.newPage();
    let page2: Page = await context2.newPage();
    
    //user1: admin
    await page1.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    await page1.locator('#input-email').fill('march2024@open.com');
    await page1.locator('#input-password').fill('Selenium@12345');
    await page1.locator('//input[@value="Login"]').click();
    //make some changes1


    //user2: customer:
    await page2.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await page2.locator('#input-email').fill('pwtest@play.com');
    await page2.locator('#input-password').fill('test@123');
    await page2.locator('//input[@value="Login"]').click();
    //check the changes
        
    context1.close();
    context2.close();

    //browser.close();

    // await page1.waitForTimeout(5000);
    // await page2.waitForTimeout(5000);


})


