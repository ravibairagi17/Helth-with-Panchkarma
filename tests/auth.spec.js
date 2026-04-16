import { test, expect } from '@playwright/test';

async function goto(page, url) {
  await page.goto(url, { waitUntil: 'load' });
}

test.describe('Auth automation (template)', () => {
  test('login page is shown before app content', async ({ page }) => {
    await goto(page, '/login');
    const heading = page.locator('h1, h2, h3').filter({ hasText: /^login$/i }).first();
    await expect(heading).toBeVisible();
    await expect(page.locator('nav')).toHaveCount(0);
  });

  test('signup page is shown before app content', async ({ page }) => {
    await goto(page, '/signup');
    const heading = page
      .locator('h1, h2, h3')
      .filter({ hasText: /^signup$/i })
      .first();
    await expect(heading).toBeVisible();
  });
});

