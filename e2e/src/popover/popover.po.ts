import { browser, by, element, ExpectedConditions, ElementFinder } from 'protractor';

export class PopoverPage {
  private readonly TOOLTIP_URL = '/componenti/popover';
  private readonly ID_EXAMPLE_TAB = 'popover-examples-tab';

  private readonly ID_TOOLTIP_PLACEMENT_BUTTON = 'popover-placements-button';
  private readonly ID_TOOLTIP_DISPOSE_BUTTON = 'popover-dispose-button';
  private readonly ID_TOOLTIP_FOCUS_BUTTON  = 'popover-focus-button';

  private readonly ID_EXAMPLE_STANDARD = 'popover-example-simple';
  private readonly ID_EXAMPLE_TOP = 'popover-example-top';
  private readonly ID_EXAMPLE_RIGHT = 'popover-example-right';
  private readonly ID_EXAMPLE_LEFT = 'popover-example-left';
  private readonly ID_EXAMPLE_BOTTOM = 'popover-example-bottom';
  private readonly ID_EXAMPLE_PLACEMENT = 'popover-example-placements';
  private readonly ID_EXAMPLE_FOCUS = 'popover-example-focus';
  private readonly ID_EXAMPLE_DISPOSABLE = 'popover-example-disposable';

  private readonly ID_TOOLTIP_STANDARD = 'it-popover-0';
  private readonly ID_TOOLTIP_TOP = 'it-popover-2';
  private readonly ID_TOOLTIP_RIGHT = 'it-popover-3';
  private readonly ID_TOOLTIP_LEFT = 'it-popover-4';
  private readonly ID_TOOLTIP_BOTTOM = 'it-popover-5';
  private readonly ID_TOOLTIP_PLACEMENT = 'it-popover-6';
  private readonly ID_TOOLTIP_FOCUS = 'it-popover-7';
  private readonly ID_TOOLTIP_DISPOSABLE = 'it-popover-10';

  async go() {
    await browser.get(this.TOOLTIP_URL);
    await element(by.id(this.ID_EXAMPLE_TAB)).click();
    return await browser.sleep(500);
  }

  private getLabelForAttribute(attr: string) {
    return `[id="${attr}"]`;
  }

  async click(elementId: string) {
    await element(by.id(elementId)).click();
  }

  async clickOverStandardExample() {
    await this.click(this.ID_EXAMPLE_STANDARD);
  }

  async clickOverTopExample() {
    await this.click(this.ID_EXAMPLE_TOP);
  }

  async clickOverRightExample() {
    await this.click(this.ID_EXAMPLE_RIGHT);
  }

  async clickOverBottomExample() {
    await this.click(this.ID_EXAMPLE_BOTTOM);
  }

  async clickOverLeftExample() {
    await this.click(this.ID_EXAMPLE_LEFT);
  }

  async existsStandardExamplePopover() {
    return await element(by.id(this.ID_TOOLTIP_STANDARD)).isPresent();
  }

  async getStandardExamplePopoverClass() {
    return await element(by.id(this.ID_TOOLTIP_STANDARD)).getAttribute('class');
  }

  async existsTopExamplePopover() {
    return await element(by.id(this.ID_TOOLTIP_TOP)).isPresent();
  }

  async getTopExamplePopoverClass() {
    return await element(by.id(this.ID_TOOLTIP_TOP)).getAttribute('class');
  }

  async existsRightExamplePopover() {
    return await element(by.id(this.ID_TOOLTIP_RIGHT)).isPresent();
  }

  async getRightExamplePopoverClass() {
    return await element(by.id(this.ID_TOOLTIP_RIGHT)).getAttribute('class');
  }

  async existsBottomExamplePopover() {
    return await element(by.id(this.ID_TOOLTIP_BOTTOM)).isPresent();
  }

  async getBottomExamplePopoverClass() {
    return await element(by.id(this.ID_TOOLTIP_BOTTOM)).getAttribute('class');
  }

  async existsLeftExamplePopover() {
    return await element(by.id(this.ID_TOOLTIP_LEFT)).isPresent();
  }

  async getLeftExamplePopoverClass() {
    return await element(by.id(this.ID_TOOLTIP_LEFT)).getAttribute('class');
  }

  async clickOverPlacementExample() {
    await this.click(this.ID_EXAMPLE_PLACEMENT);
  }

  async existsPlacementExamplePopover() {
    return await element(by.id(this.ID_TOOLTIP_PLACEMENT)).isPresent();
  }

  async getPlacementExamplePopoverClass() {
    return await element(by.id(this.ID_TOOLTIP_PLACEMENT)).getAttribute('class');
  }

  async changePopoverPlacement() {
    await element(by.id(this.ID_TOOLTIP_PLACEMENT_BUTTON)).click();
  }

  async clickOverDisposableExample() {
    await this.click(this.ID_EXAMPLE_DISPOSABLE);
  }

  async clickOverDisposeButton() {
    await this.click(this.ID_TOOLTIP_DISPOSE_BUTTON);
  }

  async existsDisposableExamplePopover() {
    return await element(by.id(this.ID_TOOLTIP_DISPOSABLE)).isPresent();
  }

  async getDisposableExamplePopoverClass() {
    return await element(by.id(this.ID_TOOLTIP_DISPOSABLE)).getAttribute('class');
  }

  async disposeExamplePopover() {
    await element(by.id(this.ID_TOOLTIP_DISPOSE_BUTTON)).click();
  }

  async clickOverFocusExample() {
    await this.click(this.ID_EXAMPLE_FOCUS);
  }

  async existsFocusExamplePopover() {
    return await element(by.id(this.ID_TOOLTIP_FOCUS)).isPresent();
  }

  async getFocusExamplePopoverClass() {
    return await element(by.id(this.ID_TOOLTIP_FOCUS)).getAttribute('class');
  }

  async hideFocusExamplePopover() {
    await this.click('popover-lose-focus');
  }

  async hiddenFocusExamplePopover() {
    return await element(by.id(this.ID_TOOLTIP_FOCUS)).getAttribute('hidden');
  }

}
