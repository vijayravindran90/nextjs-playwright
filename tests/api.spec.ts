import { test,expect } from '@playwright/test';

test('verify and validate the API testing page @api @smoke', async ({page,request}) => {
  await page.goto(`/`);
  const [response] = await Promise.all([
    page.waitForResponse(resp => resp.url().includes('https://api.predic8.de/shop/v2/products/8') && resp.status() === 200),
    page.locator('a[href*="/api"]').first().click(),
  ]);
  const responseBody = await response.json();
    expect(responseBody.name).toHaveText('Grapes');
    expect(responseBody.price).toEqual('4.5');
});
