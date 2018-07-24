import { browser, ElementFinder } from 'protractor';
import { TooltipPage } from './tooltip.po';
import { timeout } from 'q';

describe('Tooltip', () => {
  let page: TooltipPage;

  beforeEach(async() => {
    page = new TooltipPage();
    await page.go();
  });

  it('dovrebbe iniziare creato e visualizzato', async () => {
    expect(await page.existsStandardExampleTooltip()).toBeFalsy();
    await page.hoverOverStandardExample();
    expect(await page.existsStandardExampleTooltip()).toBeTruthy();
    expect(await page.getStandardExampleTooltipClass()).toBe('tooltip show bs-tooltip-right');
  });

  it('dovrebbe iniziare creato e visualizzato in alto', async () => {
    expect(await page.existsTopExampleTooltip()).toBeFalsy();
    await page.hoverOverTopExample();
    expect(await page.existsTopExampleTooltip()).toBeTruthy();
    expect(await page.getTopExampleTooltipClass()).toBe('tooltip show bs-tooltip-top');
  });

  it('dovrebbe iniziare creato e visualizzato a destra', async () => {
    expect(await page.existsRightExampleTooltip()).toBeFalsy();
    await page.hoverOverRightExample();
    expect(await page.existsRightExampleTooltip()).toBeTruthy();
    expect(await page.getRightExampleTooltipClass()).toBe('tooltip show bs-tooltip-right');
  });

  it('dovrebbe iniziare creato e visualizzato a sinistra', async () => {
    expect(await page.existsLeftExampleTooltip()).toBeFalsy();
    await page.hoverOverLeftExample();
    expect(await page.existsLeftExampleTooltip()).toBeTruthy();
    expect(await page.getLeftExampleTooltipClass()).toBe('tooltip show bs-tooltip-left');
  });

  it('dovrebbe iniziare creato e visualizzato in basso', async () => {
    expect(await page.existsBottomExampleTooltip()).toBeFalsy();
    await page.hoverOverBottomExample();
    expect(await page.existsBottomExampleTooltip()).toBeTruthy();
    expect(await page.getBottomExampleTooltipClass()).toBe('tooltip show bs-tooltip-bottom');
  });

  it('dovrebbe iniziare creato e visualizzato a destra, poi in alto e successivamente a sinistra, ed infine in basso', async () => {
    await page.hoverOverPlacementExample();
    expect(await page.existsPlacementExampleTooltip()).toBeTruthy();
    expect(await page.getPlacementExampleTooltipClass()).toBe('tooltip show bs-tooltip-right');

    await page.changeTooltipPlacement();
    expect(await page.getPlacementExampleTooltipClass()).toBe('tooltip show bs-tooltip-top');

    await page.changeTooltipPlacement();
    expect(await page.getPlacementExampleTooltipClass()).toBe('tooltip show bs-tooltip-left');

    await page.changeTooltipPlacement();
    expect(await page.getPlacementExampleTooltipClass()).toBe('tooltip show bs-tooltip-bottom');
  });

  it('dovrebbe iniziare creato e visualizzato, per poi essere distrutto ed infine ricreato e rivisualizzato', async () => {
    await page.hoverOverDisposableExample();
    const isPresent = await page.existsDisposableExampleTooltip();
    expect(isPresent).toBeTruthy();

    // fare mouse out o qualcosa del genere per nascondere il tooltip?
    await page.disposeExampleTooltip();

    const isDisposed = await page.existsDisposableExampleTooltip();
    expect(isDisposed).toBeFalsy();

    await page.hoverOverDisposableExample();
    expect(await page.existsDisposableExampleTooltip()).toBeTruthy();
  });

});
