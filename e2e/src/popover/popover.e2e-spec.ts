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
    expect(await page.existsStandardExamplePopover()).toBeFalsy();

    await page.clickOverTopPlacement();
    await page.clickOverStandardExample();

    expect(await page.existsStandardExamplePopover()).toBeTruthy();
    expect(await page.getPlacementExamplePopoverClass()).toBe('popover bs-popover-top');
  });

  it('dovrebbe iniziare creato e visualizzato a destra', async () => {
    expect(await page.existsStandardExamplePopover()).toBeFalsy();

    await page.clickOverRightPlacement();
    await page.clickOverStandardExample();

    expect(await page.existsStandardExamplePopover()).toBeTruthy();
    expect(await page.getPlacementExamplePopoverClass()).toBe('popover bs-popover-right');
  });

  it('dovrebbe iniziare creato e visualizzato a sinistra', async () => {
    expect(await page.existsStandardExamplePopover()).toBeFalsy();

    await page.clickOverLeftPlacement();
    await page.clickOverStandardExample();

    expect(await page.existsStandardExamplePopover()).toBeTruthy();
    expect(await page.getPlacementExamplePopoverClass()).toBe('popover bs-popover-left');
  });

  it('dovrebbe iniziare creato e visualizzato in basso', async () => {
    expect(await page.existsStandardExamplePopover()).toBeFalsy();

    await page.clickOverBottomPlacement();
    await page.clickOverStandardExample();

    expect(await page.existsStandardExamplePopover()).toBeTruthy();
    expect(await page.getPlacementExamplePopoverClass()).toBe('popover bs-popover-bottom');
  });

  it('dovrebbe iniziare creato e visualizzato a destra, poi in alto e successivamente a sinistra, ed infine in basso', async () => {
    await page.clickOverStandardExample();
    expect(await page.existsPlacementExamplePopover()).toBeTruthy();
    expect(await page.getPlacementExamplePopoverClass()).toBe('popover bs-popover-right');

    await page.clickOverTopPlacement();
    expect(await page.getPlacementExamplePopoverClass()).toBe('popover bs-popover-top');

    await page.clickOverLeftPlacement();
    expect(await page.getPlacementExamplePopoverClass()).toBe('popover bs-popover-left');

    await page.clickOverBottomPlacement();
    expect(await page.getPlacementExamplePopoverClass()).toBe('popover bs-popover-bottom');
  });

  it('dovrebbe iniziare creato e visualizzato, per poi essere chiuso con un click successivo', async () => {
    await page.clickOverFocusTrigger();

    await page.clickOverStandardExample();
    const isPresent = await page.existsFocusExamplePopover();
    expect(isPresent).toBeTruthy();

    await page.clickOverFocusTrigger();

    const isHidden = await page.getFocusExamplePopoverClass();
    expect(isHidden).toBeTruthy();
  });

  it('dovrebbe iniziare creato e visualizzato, per poi essere distrutto ed infine ricreato e rivisualizzato', async () => {
    await page.clickOverStandardExample();
    const isPresent = await page.existsDisposableExamplePopover();
    expect(isPresent).toBeTruthy();

    await page.clickOverDisposeButton();

    const isDisposed = await page.existsDisposableExamplePopover();
    expect(isDisposed).toBeFalsy();

    await page.clickOverStandardExample();
    expect(await page.existsDisposableExamplePopover()).toBeTruthy();
  });

});
