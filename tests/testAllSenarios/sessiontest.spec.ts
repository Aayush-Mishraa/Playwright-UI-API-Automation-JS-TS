import { test, expect, chromium, Page, Locator } from '@playwright/test';


//test.use({ storageState: 'auth/session.json' });

test('navigate to cart page without login', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=checkout/cart');


    await page.waitForTimeout(5000);
    
})

//ideal use cases:
//this will work only wor the basic Feacture
//Save the time
//sid, cookies, tokenID -- forver, 24  hrs, 
//JWT, tokenid, sessionId

//but end user
//so selenium did not follow this feacture because its follow the w3c protocal

//wont work:
//otp
//oauth2.0// means when we login with 3rd aplication
//2FA, MFA
//Recaptcha