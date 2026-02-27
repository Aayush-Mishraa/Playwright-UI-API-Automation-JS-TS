import { test, expect } from '@playwright/test';

let loginData = [
    { username: 'pwtest@nal.com', password: 'test123'}, //0
    { username: 'pwapp@nal.com', password: 'test123'} //1
];

for (let data of loginData) {
    test(`login test for open cart ${data.username} and ${data.password}`, async ({ page }) => {
        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
        await page.getByRole('textbox', { name: 'E-Mail Address' }).fill(data.username);
        await page.getByRole('textbox', { name: 'Password' }).fill(data.password);
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page).toHaveTitle('My Account');
    });
}

