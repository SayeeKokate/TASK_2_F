import { test, expect } from '../fixtures/baseFixture';
test('TC_008 Fixture Demo', async ({
    page,logger
}) =>{
    logger.log('Opening Browser Windows page');
    await page.goto(
        'https://demoqa.com/browser-windows'
    );
    await expect(page).toHaveURL(/browser-windows/);
});