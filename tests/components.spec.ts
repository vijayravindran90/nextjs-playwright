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

test('verify and validate the radio button component @radio @smoke', async ({ page }) => {
  await page.goto(``);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Create Next App/);
  await page.getByLabel('Option 2').check();
  const isChecked = await page.getByLabel('Option 2').isChecked();
  expect(isChecked).toBeTruthy();   
});
test('verify and validate the checkbox component @checkbox @smoke', async ({ page }) => {
  await page.goto(``);
  await page.getByLabel('Item 1').check();
  const isChecked = await page.getByLabel('Item 1').isChecked();
  expect(isChecked).toBeTruthy();   
});

test('verify and validate the dropdown component @dropdown @smoke', async ({ page }) => {
  await page.goto(``);
  await page.selectOption('#dropdown', 'Banana');
  await expect(page.locator('//p[text()="Banana"]')).toBeVisible();
});
test('verify and validate the download component @download @smoke',async({page})=>{
 await page.goto(``);

 // Wait for the download and save it
 const [downloadPromise] = await Promise.all([
  page.waitForEvent('download'),
  page.getByRole('button', { name: 'Download Sample File' }).click()
]);
const download = await downloadPromise;
let fileName = await download.suggestedFilename();
await download.saveAs(`./downloads/${fileName}`);

// Check if the file exists
  expect(fs.existsSync(`./downloads/${fileName}`)).toBeTruthy();
});

test('verify and validate the upload component @upload @smoke',async({page})=>{
 await page.goto(``);

 // Wait for upload to complete
 await page.getByLabel('File Upload').setInputFiles('./downloads/sample.txt');
 await expect(page.getByText('Uploaded')).toBeVisible();
});

test('verify and validate the popup component @popup @smoke',async({page})=>{
 await page.goto(``);
 await page.getByRole('button', { name: 'Open Popup' }).click();
  // Wait for modal to appear
  await expect(page.getByText('Popup Modal').first()).toBeVisible();
  // Click Confirm button
  await page.getByRole('button', { name: 'Confirm' }).click();
});