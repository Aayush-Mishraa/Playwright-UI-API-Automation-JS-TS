import { test, expect, Page, Locator } from '@playwright/test'


test('single selection', async ({ page }) => {
    
    await page.goto('https://selectorshub.com/xpath-practice-page/');

    let count = 0;
    while (true) {
        let isEleExist = await page.locator(`//td[text()='Hong Kong']`).isVisible();
        if (isEleExist) {
            console.log('ele is found...');
            await page.locator(`//td[text()='Hong Kong']/preceding-sibling::td/input[@type='checkbox']`).check();
            break;
        }
        //click on next icon: pagination logic:
        let next = page.getByRole('link', { name: 'Next' });
        await next.click();
        count++;
        await page.waitForTimeout(1000);
        if (await next.isDisabled()) {
            console.log('pagination is over.....');
            break;
        }

        console.log(count);
    }

    await page.pause();
    
});





test('multiple selection', async ({ page}) => {
    test.slow();
    await page.goto('https://selectorshub.com/xpath-practice-page/');

    while (true) {
        let allEles = await page.locator(`//td[text()='India']/preceding-sibling::td/input[@type='checkbox']`).all();
        if (allEles.length > 0) {
            for (let e of allEles) {
                await e.click();
                }
        }
        //pagination logic : click on next icon:
        let next = page.getByRole('link', { name: 'Next' });
        
        if (await next.isDisabled()) {
            console.log('pagination is over...');
            break;
        }
        await next.click();



    }

    await page.pause();
    
})