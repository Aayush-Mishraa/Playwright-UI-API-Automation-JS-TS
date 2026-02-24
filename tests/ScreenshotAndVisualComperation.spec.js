import{test,expect} from '@playwright/test';


test('Screenshot and Visual Comparission', async({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const getTitile = await page.title();
    console.log(getTitile)
    await page.locator("#displayed-text").screenshot({path:'displayed-text.png'});
    await page.locator("#displayed-text").isVisible();
    await page.locator("#hide-textbox").click();
    await page.screenshot({path: 'screenshot.png'});
    await expect(page.locator("#displayed-text")).toBeHidden();
})

//now we do visual testing
//what is visual testing?
//Visual testing is a type of software testing that focuses on verifying the visual aspects of an application, such as its layout, design, and user interface.
//  It involves comparing screenshots of the application against expected results to identify any visual discrepancies or issues. Visual testing can help ensure 
// that the application looks and functions as intended across different devices, browsers, and screen sizes.

//screenshot that ->store->screenshot that->store->compare with previous screenshot
//if there is any difference in the screenshots then it will fail the test and if there is no difference then it will pass the test. 
// This is a very useful technique to ensure that the application is visually consistent and that there are no unexpected changes in the UI.


test.only('Visual Comparission', async({page})=>{
   await page.goto("https://www.google.com/");
   expect(await page.screenshot()).toMatchSnapshot('landing.png')
})