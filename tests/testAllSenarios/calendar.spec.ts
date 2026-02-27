import { test, expect, Page, Locator } from '@playwright/test'


test('single selection', async ({ page }) => {
    
    await page.goto('https://seleniumpractise.blogspot.com/2016/08/how-to-handle-calendar-in-selenium.html');

        await page.locator('#datepicker').click();

        let currentMonthYear = await page.locator(`div.ui-datepicker-title`).textContent();
        console.log(currentMonthYear); //October 2025

         let expectedMonthYear = "April 2026";
        while (true) {
            if (currentMonthYear?.replace(/\s+/g, '') === expectedMonthYear) { //April 2026 === April 2026
                await page.getByText('16', { exact: true }).click();
                break;
            }
            //click on next icon: go to the next month:
            await page.locator(`span:has-text("Next")`).click();
            currentMonthYear = await page.locator(`div.ui-datepicker-title`).textContent();
            console.log(currentMonthYear);
        }

    await page.pause();
    
});