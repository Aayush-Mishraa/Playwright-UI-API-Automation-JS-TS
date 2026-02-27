import { test, expect, chromium, Page, Locator } from '@playwright/test';


//test.use({ storageState: 'auth/session.json' });

test('navigate to cart page without login', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=checkout/cart');


    await page.waitForTimeout(5000);
    
})

//ideal use cases:
//sid, cookies, tokenID -- forver, 24  hrs, 
//JWT, tokenid, sessionId


//wont work:
//otp
//oauth2.0
//2FA, MFA
//Recaptcha