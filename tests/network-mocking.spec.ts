import { test, expect } from '@playwright/test';

// TC_005 Mock Books API Response

test('TC_005 Mock Books API', async ({ page }) => {

await page.route('**/BookStore/v1/Books', async route => {

    await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
            books: [
                {
                    isbn: '111',
                    title: 'Playwright Mock Book',
                    subTitle: 'Testing Book',
                    author: 'QA Team',
                    publish_date: '2025-01-01',
                    publisher: 'Playwright',
                    pages: 100,
                    description: 'Mocked response',
                    website: 'https://playwright.dev'
                }
            ]
        })
    });

});

await page.goto('https://demoqa.com/books');

await expect(
    page.getByText('Playwright Mock Book')
).toBeVisible();
});

// TC_006 Mock Empty Books Response 

test('TC_006 Mock Empty Books Response', async ({ page }) => {

await page.route('**/BookStore/v1/Books', async route => {

    await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
            books: []
        })
    });

});

await page.goto('https://demoqa.com/books');

await expect(page).toHaveURL(/books/);
});

// TC_007 Delay API Response 

test('TC_007 Delay Books API Response', async ({ page }) => {

await page.route('**/BookStore/v1/Books', async route => {

        await route.continue();
    });
    

await page.goto('https://demoqa.com/books');

await expect(page).toHaveURL(/books/);
});

