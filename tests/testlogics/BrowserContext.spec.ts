import { test, expect, chromium, Page, BrowserContext, Browser } from '@playwright/test'

test('check page title', async()=> {

    let browser:Browser =  await chromium.launch({headless:false, channel:'chrome'});
    let context1:BrowserContext = await browser.newContext();
    let context2:BrowserContext = await browser.newContext();

    let page1:Page =  await context1.newPage();
    let page2:Page =  await context1.newPage();

    await page1.goto("https://aayushmishra.tech/ecommerceautomation/");
    await page1.locator("");

    await page2.goto("https://aayushmishra.tech/ecommerceautomation/")






});