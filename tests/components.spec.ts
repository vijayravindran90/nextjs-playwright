import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

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
test('verify and validate the checkbox component @checkbox', async ({ page }) => {
  await page.goto(``);
  await page.getByLabel('Item 1').check();
  const isChecked = await page.getByLabel('Item 1').isChecked();
  expect(isChecked).toBeTruthy();   
});

test('verify and validate the dropdown component @dropdown', async ({ page }) => {
  await page.goto(``);
  await page.getByLabel('Select an option').selectOption('Banana');
  const selectedValue = await page.getByLabel('Select an option').inputValue();
  expect(selectedValue).toBe('Banana');   
});
test('verify and validate the download component @download',async({page})=>{
 await page.goto(``);

 // Wait for the download and save it
 const downloadPromise = await page.waitForEvent('download');
await page.getByRole('button', { name: 'Download Sample File' }).click();
const download = await downloadPromise;

// Save the file
const filePath = path.join('./downloads', 'sample-file.txt');
await download.saveAs(filePath);

// Check if the file exists
  expect(fs.existsSync(filePath)).toBeTruthy();
});