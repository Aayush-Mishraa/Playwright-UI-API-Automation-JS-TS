import { test, expect, chromium, Page, Locator } from '@playwright/test';

test('check page title', async ({ page }) => {

    await page.goto('https://www.amazon.com', {referer: 'http://www.abc.com'});

    //enter username
   //enter pwd
    let title: string = await page.title();
    console.log('page title : ' + title);
})