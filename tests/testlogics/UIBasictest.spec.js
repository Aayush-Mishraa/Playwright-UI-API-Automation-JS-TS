const { test, expect } = require('@playwright/test')

test('Browser Playwright Test', async ({ browser }) => {

    const context = await browser.newContext()//this will create a new browser context, which is an isolated environment for the test
    const page = await context.newPage();

    const username = page.locator("#username");
    const password = page.locator("#password");
    const signinButton = page.locator("#signInBtn");
    const cardTitle =  page.locator(".card-body a");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    console.log(await page.title());

    //css
    await username.fill("academy");
    await password.fill("Learning@830$3mK2");
    await signinButton.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText("Incorrect");

    await username.fill("");
    await username.fill("rahulshettyacademy");
    await signinButton.click();

    console.log(await cardTitle.nth(2).textContent());
    console.log(await cardTitle.first().textContent());
    // console.log(await cardTitle.nth(0).textContent());
    // console.log(await cardTitle.nth(3).textContent());

    const allCardTitle = await cardTitle.allTextContents();
    console.log(allCardTitle)

})


test('Page Playwright Test', async ({ page }) => {



    await page.goto("https://google.com")
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");

})