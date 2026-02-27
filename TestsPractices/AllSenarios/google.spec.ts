//1. with test() block:

import { test, expect, chromium, Page, Locator } from '@playwright/test';

test('check page title', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    let title: string = await page.title();
    console.log('page title : ' + title);
})

test('check page url', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    let url: string =  page.url();
    console.log('page url ::::: ' + url);
})

test('check page logo', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    expect(await page.getByTitle('naveenopencart').count()).toBe(2);
})