import { test } from '@playwright/test';
import { NestedFramesPage } from '../pages/NestedFramesPage';

test('Nested Frames - Regression', async ({ page }) => {
    const nestedFrames = new NestedFramesPage(page);

    await nestedFrames.visitarPagina();
    await nestedFrames.imprimirTextosDeFrames();
});
