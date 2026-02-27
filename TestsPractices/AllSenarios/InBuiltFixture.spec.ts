import { test, expect, APIResponse } from '@playwright/test';
import { json } from 'stream/consumers';

test('page fixture', async ({ page }) => {
    await page.goto('https://www.google.com');
});

test('use browser and context fixtures', async ({ browser, request }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
    await page.goto('https://google.com');
    
    let response: APIResponse = await request.get('https://gorest.co.in/public/v2/users');
    console.log(response.status());
    let body = await response.text();
    console.log(body);
});

test('use context fixtures', async ({ context }) => {
  const page = await context.newPage();
    await page.goto('https://google.com');
    
});