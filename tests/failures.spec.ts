import { test, expect } from '@playwright/test';

/* Failure 1: Locator Failure */ 
test('Locator Failure Example', async ({ page }) => { await page.goto('https://demoqa.com');
await page.locator('#wrongLocator').click();
});

/* Failure 2: Assertion Failure */ 
test('Assertion Failure Example', async ({ page }) => { await page.goto('https://demoqa.com');
await expect(page).toHaveTitle('Wrong Title');
});


/* Failure 3: Visibility Failure */ 
test('Visibility Failure Example', async ({ page }) => { await page.goto('https://demoqa.com');
await expect(
    page.locator('#hiddenElement')
).toBeVisible();
});


/* Failure 4: Navigation Failure */ 
test('Navigation Failure Example', async ({ page }) => { await page.goto('https://invalid-demoqa-url.com');
await expect(page).toHaveURL(/demoqa/);
});


/* Failure 5: Timeout Failure */ 
test('Timeout Failure Example', async ({ page }) => { test.setTimeout(1000);
await page.goto('https://demoqa.com');
await page.waitForTimeout(5000);
});