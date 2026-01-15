import { test,expect } from '@playwright/test';

test('verify and validate the API testing page @api @smoke', async ({page,request}) => {
  await page.goto(`/nextjs-playwright`)
  const [response] = await Promise.all([
    page.waitForResponse(resp => resp.url().includes('https://api.predic8.de/shop/v2/products/8')),
    page.locator('a[href*="/api"]').first().click(),
  ]);
  const responseBody = await response.json();
  console.log(responseBody.name);
  console.log(responseBody.price);
    expect(responseBody.name).toBe('Grapes');
    expect(responseBody.price).toBe(4.5);
});
