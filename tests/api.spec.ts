import { test,expect } from '@playwright/test';

test('verify and validate the API testing page @api @smoke', async ({page,request}) => {
  await page.goto(`/`);
  const [response] = await Promise.all([
    page.waitForResponse(resp => resp.url().includes('/api/data') && resp.status() === 200),
    page.locator('a[href*="/api"]').first().click(),
  ]);
});
