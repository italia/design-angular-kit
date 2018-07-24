import { browser, ElementFinder } from 'protractor';
import { PopoverPage } from './popover.po';
import { timeout } from 'q';

describe('Popover', () => {
  let page: PopoverPage;

  beforeEach(async() => {
    page = new PopoverPage();
    await page.go();
  });

  it('dovrebbe iniziare creato e visualizzato', async () => {
    expect(await page.existsStandardExamplePopover()).toBeFalsy();

    await page.clickOverStandardExample();
    expect(await page.existsStandardExamplePopover()).toBeTruthy();
    expect(await page.getStandardExamplePopoverClass()).toBe('popover bs-popover-right');

    await page.clickOverStandardExample();
    expect(await page.existsStandardExamplePopover()).toBeTruthy();
    expect(await page.getStandardExamplePopoverClass()).toBe('popover bs-popover-right');
  });

  it('dovrebbe iniziare creato e visualizzato in alto', async () => {
    expect(await page.existsTopExamplePopover()).toBeFalsy();
    await page.clickOverTopExample();
    expect(await page.existsTopExamplePopover()).toBeTruthy();
    expect(await page.getTopExamplePopoverClass()).toBe('popover bs-popover-top');
  });

  it('dovrebbe iniziare creato e visualizzato a destra', async () => {
    expect(await page.existsRightExamplePopover()).toBeFalsy();
    await page.clickOverRightExample();
    expect(await page.existsRightExamplePopover()).toBeTruthy();
    expect(await page.getRightExamplePopoverClass()).toBe('popover bs-popover-right');
  });

  it('dovrebbe iniziare creato e visualizzato a sinistra', async () => {
    expect(await page.existsLeftExamplePopover()).toBeFalsy();
    await page.clickOverLeftExample();
    expect(await page.existsLeftExamplePopover()).toBeTruthy();
    expect(await page.getLeftExamplePopoverClass()).toBe('popover bs-popover-left');
  });

  it('dovrebbe iniziare creato e visualizzato in basso', async () => {
    expect(await page.existsBottomExamplePopover()).toBeFalsy();
    await page.clickOverBottomExample();
    expect(await page.existsBottomExamplePopover()).toBeTruthy();
    expect(await page.getBottomExamplePopoverClass()).toBe('popover bs-popover-bottom');
  });

  it('dovrebbe iniziare creato e visualizzato a destra, poi in alto e successivamente a sinistra, ed infine in basso', async () => {
    await page.clickOverPlacementExample();
    expect(await page.existsPlacementExamplePopover()).toBeTruthy();
    expect(await page.getPlacementExamplePopoverClass()).toBe('popover bs-popover-right');

    await page.changePopoverPlacement();
    expect(await page.getPlacementExamplePopoverClass()).toBe('popover bs-popover-top');

    await page.changePopoverPlacement();
    expect(await page.getPlacementExamplePopoverClass()).toBe('popover bs-popover-left');

    await page.changePopoverPlacement();
    expect(await page.getPlacementExamplePopoverClass()).toBe('popover bs-popover-bottom');
  });

  it('dovrebbe iniziare creato e visualizzato, per poi essere chiuso con un click successivo', async () => {
    await page.clickOverFocusExample();
    const isPresent = await page.existsFocusExamplePopover();
    expect(isPresent).toBeTruthy();

    await page.hideFocusExamplePopover();

    const isHidden = await page.hiddenFocusExamplePopover();
    expect(isHidden).toBeTruthy();
  });

  it('dovrebbe iniziare creato e visualizzato, per poi essere distrutto ed infine ricreato e rivisualizzato', async () => {
    await page.clickOverDisposableExample();
    const isPresent = await page.existsDisposableExamplePopover();
    expect(isPresent).toBeTruthy();

    await page.disposeExamplePopover();

    const isDisposed = await page.existsDisposableExamplePopover();
    expect(isDisposed).toBeFalsy();

    await page.clickOverDisposableExample();
    expect(await page.existsDisposableExamplePopover()).toBeTruthy();
  });

});
