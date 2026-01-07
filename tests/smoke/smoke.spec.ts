import { test, expect } from '@playwright/test';

test('Smoke Test - Acceso básico', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Nested Frames')).toBeVisible();
    await expect(page.getByText('Multiple Windows')).toBeVisible();
});
