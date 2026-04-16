import { test, expect } from '@playwright/test';

async function login(page) {
  await page.goto('/', { waitUntil: 'load' });
  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
  await page.getByLabel('Email Address').fill('demo@example.com');
  await page.getByLabel('Password').fill('demo123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page.locator('nav')).toBeVisible();
}

async function gotoAndWaitForApp(page, path) {
  await page.goto(path, { waitUntil: 'load' });
  // React renders the navbar immediately; use it as a "app mounted" signal.
  await expect(page.locator('nav')).toBeVisible();
  await expect(page.getByText(/AyurSutra/i)).toBeVisible();
}

test('smoke: key pages render', async ({ page }) => {
  await login(page);

  // Home
  await gotoAndWaitForApp(page, '/');
  await expect(page.locator('h1').first()).toContainText(/Embark on Your Personalized Wellness Journey/i);

  // Therapies
  await gotoAndWaitForApp(page, '/therapies');
  await expect(page.locator('h2', { hasText: /Available Therapies/i })).toBeVisible();

  // Centers
  await gotoAndWaitForApp(page, '/centers');
  await expect(page.locator('h2', { hasText: /Available Centers/i })).toBeVisible();

  // Booking
  await gotoAndWaitForApp(page, '/booking');
  await expect(page.locator('h2', { hasText: /Book Appointment/i })).toBeVisible();

  // Dashboard
  await gotoAndWaitForApp(page, '/dashboard');
  await expect(page.locator('h2', { hasText: /Your Therapy Status/i })).toBeVisible();
});

test('smoke: navbar links are present', async ({ page }) => {
  await login(page);
  await gotoAndWaitForApp(page, '/');

  await expect(page.locator('nav a', { hasText: 'Home' })).toBeVisible();
  await expect(page.locator('nav a', { hasText: 'Therapies' })).toBeVisible();
  await expect(page.locator('nav a', { hasText: 'Centers' })).toBeVisible();
  await expect(page.locator('nav a', { hasText: 'Book Appointment' })).toBeVisible();
  await expect(page.locator('nav a', { hasText: 'Dashboard' })).toBeVisible();
});

