import { test } from '@playwright/test';
import { WindowsPage } from '../pages/WindowsPage';


test('Multiple Windows - Regression', async ({ page }) => {
    const windowsPage = new WindowsPage(page);

    await windowsPage.visitarPagina();

    const newWindowPage = await windowsPage.abrirNuevaVentana();

    await newWindowPage.verificarTexto();
});