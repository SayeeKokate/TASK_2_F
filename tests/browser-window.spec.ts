import { test, expect } from '@playwright/test';

// TC_001 Verify New Tab button opens a new tab 

test('TC_001 Verify New Tab button opens a new tab', async ({ page }) => {

await page.goto('https://demoqa.com/browser-windows');

const [newPage] = await Promise.all([
    page.context().waitForEvent('page'),
    page.locator('#tabButton').click()
]);

await newPage.waitForLoadState();

await expect(newPage).toHaveURL(/sample/);
});

// TC_002 Verify content of newly opened tab 

test('TC_002 Verify content of newly opened tab', async ({ page }) => {

await page.goto('https://demoqa.com/browser-windows');

const [newPage] = await Promise.all([
    page.context().waitForEvent('page'),
    page.locator('#tabButton').click()
]);

await newPage.waitForLoadState();

await expect(
    newPage.locator('#sampleHeading')
).toHaveText('This is a sample page');
});

// TC_003 Close child tab and switch back to parent 

test('TC_003 Close child tab and switch back', async ({ page }) => {

await page.goto('https://demoqa.com/browser-windows');

const [newPage] = await Promise.all([
    page.context().waitForEvent('page'),
    page.locator('#tabButton').click()
]);

await newPage.close();

await expect(
    page.locator('#tabButton')
).toBeVisible();
});

// TC_004 Verify New Window Message 
 
test('TC_004 Verify New Window Message', async ({ page }) => {

await page.goto('https://demoqa.com/browser-windows');

const [newWindow] = await Promise.all([
    page.context().waitForEvent('page'),
    page.locator('#messageWindowButton').click()
]);

await newWindow.waitForLoadState();

const text = await newWindow
    .locator('body')
    .textContent();

expect(text).toContain('Knowledge');
});