import { Page, expect } from '@playwright/test';

export class NewWindowPage {

    constructor(private page: Page) {}

    private titulo_NewWindow = () => this.page.locator('h3');


    public async verificarTexto(): Promise<void> {
        await expect(this.titulo_NewWindow())
        .toHaveText('New Window');
  }
}
