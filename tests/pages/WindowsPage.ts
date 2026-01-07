import { Page, expect } from '@playwright/test';
import { NewWindowPage } from './NewWindowPage';

export class WindowsPage {

    constructor(private page: Page) {}

    private link_ClickHere = () => this.page.getByText('Click Here');


    public async visitarPagina(): Promise<void> {
        await this.page.goto('/windows', {waitUntil: 'domcontentloaded', timeout: 60000});
    }

    public async abrirNuevaVentana(): Promise<NewWindowPage> {
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.link_ClickHere().click()
        ]);

        await newPage.waitForLoadState();
        return new NewWindowPage(newPage);
    }

}
