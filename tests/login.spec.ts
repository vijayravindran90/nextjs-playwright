import { test, expect } from '@playwright/test';

test('verify and validate the login page @login', async ({ page }) => {
  await page.goto(`/login`);

  // Expect a title "to contain" a substring.                           
    await expect(page).toHaveTitle(/Create Next App/);
    await page.getByLabel('Username').fill('testuser');
    await page.getByLabel('Password').fill('password123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    page.on('dialog', async (dialog) => {
  expect(dialog.message()).toContain('Login successful!');
  await dialog.accept();
})
});
