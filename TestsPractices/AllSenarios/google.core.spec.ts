import { Browser, chromium, Locator, Page } from "@playwright/test";

//IIFE
(async () => {
   let browser: Browser = await chromium.launch({ headless: false });
    let page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    
    let title:string = await page.title(); //10secs  
    console.log('page title : ' + title);
    
    let url: string =  page.url();
    console.log('page url : ' + url);

    let emailID: Locator = page.locator('#input-email');
    await emailID.fill('naveen@gmail.com');

    await page.close();

})();

