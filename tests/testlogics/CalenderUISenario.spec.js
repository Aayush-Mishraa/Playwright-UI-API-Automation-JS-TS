const { test, expect } = require('@playwright/test');

test("Calender UI validation", async ({ page }) => {

    const monthNumber = "6"
    const yearNumber = "2027"
    const date = "20"

    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    await page.locator(".react-date-picker__inputGroup").first().click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.getByText(yearNumber).click();
    

})
