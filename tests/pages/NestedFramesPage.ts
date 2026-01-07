import { Page, FrameLocator } from '@playwright/test';

export class NestedFramesPage {

    constructor(private page: Page) {}

    private frameTop = (): FrameLocator => this.page.frameLocator('frame[name="frame-top"]');
    private frameLeft = (): FrameLocator => this.frameTop().frameLocator('frame[name="frame-left"]');
    private frameMiddle = (): FrameLocator => this.frameTop().frameLocator('frame[name="frame-middle"]');
    private frameRight = (): FrameLocator => this.frameTop().frameLocator('frame[name="frame-right"]');
    private frameBottom = (): FrameLocator => this.page.frameLocator('frame[name="frame-bottom"]');


    public async visitarPagina(): Promise<void> { await this.page.goto('/nested_frames', {waitUntil: 'domcontentloaded', timeout: 60000} );
    }

    public async imprimirTextosDeFrames(): Promise<void> {
        console.log(await this.frameLeft().locator('body').innerText());
        console.log(await this.frameMiddle().locator('body').innerText());
        console.log(await this.frameRight().locator('body').innerText());
        console.log(await this.frameBottom().locator('body').innerText());
    }
}
