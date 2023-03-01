import { test, expect } from '@playwright/test';

test.describe('test advice generator', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('http://localhost:3000/');  
  });

  test('has title', async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Advice generator app coding./);
    await expect(page.locator('q')).toContainText(['Click en el boton para generar un nuevo advice!.'])
  });
  
  test('get started link', async ({ page }) => {
    // Click the get started link.
    await page.getByRole('button').locator('visible=true').click();
  });
})
