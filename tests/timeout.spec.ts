import { test, expect } from '@playwright/test';

// TC_009 Test Timeout 
test('Test Timeout Example', async ({ page }) => {
test.setTimeout(1000);
await page.goto('https://demoqa.com');
await page.waitForTimeout(5000);
});


// TC_010 Expect Timeout 
test('Expect Timeout Example', async ({ page }) => {
await page.goto('https://demoqa.com');
await expect(
    page.locator('#wrongLocator')
).toBeVisible({
    timeout: 1000
});
});


// TC_011 Action Timeout 
test('Action Timeout Example', async ({ page }) => {
page.setDefaultTimeout(1000);
await page.goto('https://demoqa.com');
await page.locator('#wrongLocator').click();
});