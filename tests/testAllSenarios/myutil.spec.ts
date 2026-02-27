import { test, expect } from '@playwright/test';
import { ElementUtil } from '../utils/ElementUtil';
  
test('has title', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    
    let eleUtil = new ElementUtil(page, 10000);
    await eleUtil.fill(`//input[@id='input-email']`, 'test@nal.com');
    await eleUtil.fill(page.getByLabel('Password'), 'test@123');
    await eleUtil.click(`input[type="submit"][value="Login"]`, {force: true, timeout: 5000});

    await page.waitForTimeout(5000);


});