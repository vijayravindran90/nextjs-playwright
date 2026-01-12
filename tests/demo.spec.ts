import { test, expect } from '@playwright/test';

test('verify and validate the searchbox component @search', async ({ page }) => {
  await page.goto(``);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Create Next App/);
  await page.getByPlaceholder('Enter search term...').fill('playwright');
  await page.getByRole('button', { name: 'Submit' }).click();
 page.on('dialog', async (dialog) => {
  expect(dialog.message()).toContain('Search query:');
  await dialog.accept();
});
});

test('verify and validate the radio button component @radio', async ({ page }) => {
  await page.goto(``);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Create Next App/);
  await page.getByLabel('Option 2').check();
  const isChecked = await page.getByLabel('Option 2').isChecked();
  expect(isChecked).toBeTruthy();   
});