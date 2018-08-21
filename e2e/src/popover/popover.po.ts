import { browser, by, element, ExpectedConditions, ElementFinder, protractor } from 'protractor';

export class PopoverPage {
  private readonly POPOVER_URL = '/#/componenti/popover';
  private readonly ID_EXAMPLE_TAB = 'popover-examples-tab';

  private readonly ID_POPOVER_INTERACTIVE_BUTTON = 'popover-interactive-button';
  private readonly ID_POPOVER_DISPOSE_BUTTON = 'popover-disposing-button';

  private readonly ID_CHECKBOX_DISABLED = this.getLabelForAttribute('checkbox-0');
  private readonly ID_CHECKBOX_TITLE = this.getLabelForAttribute('checkbox-1');

  private readonly ID_RADIO_ADHOC = this.getLabelForAttribute('radio-1');
  private readonly ID_RADIO_BODY = this.getLabelForAttribute('radio-2');

  private readonly ID_RADIO_CLICK = this.getLabelForAttribute('radio-4');
  private readonly ID_RADIO_FOCUS = this.getLabelForAttribute('radio-5');

  private readonly ID_RADIO_RIGHT = this.getLabelForAttribute('radio-7');
  private readonly ID_RADIO_TOP = this.getLabelForAttribute('radio-8');
  private readonly ID_RADIO_LEFT = this.getLabelForAttribute('radio-9');
  private readonly ID_RADIO_BOTTOM = this.getLabelForAttribute('radio-10');

  private readonly ID_POPOVER_STANDARD = 'it-popover-0';

  async go() {
    await browser.get(this.POPOVER_URL);
    await element(by.id(this.ID_EXAMPLE_TAB)).click();
    return await browser.sleep(500);
  }

  private getLabelForAttribute(attr: string) {
    return `[for="${attr}"]`;
  }

  async click(elementId: string) {
    await element(by.css(elementId)).click();
  }

  async clickOverStandardExample() {
    const ec = protractor.ExpectedConditions;
    const elm = element(by.id(this.ID_POPOVER_INTERACTIVE_BUTTON));
    await browser.wait(ec.elementToBeClickable(elm), 5000);
    await elm.click();
  }

  async clickOverTopPlacement() {
    await this.click(this.ID_RADIO_TOP);
  }

  async clickOverRightPlacement() {
    await this.click(this.ID_RADIO_RIGHT);
  }

  async clickOverBottomPlacement() {
    await this.click(this.ID_RADIO_BOTTOM);
  }

  async clickOverLeftPlacement() {
    await this.click(this.ID_RADIO_LEFT);
  }

  async existsStandardExamplePopover() {
    return await element(by.id(this.ID_POPOVER_STANDARD)).isPresent();
  }

  async getStandardExamplePopoverClass() {
    return await element(by.id(this.ID_POPOVER_STANDARD)).getAttribute('class');
  }

  async existsPlacementExamplePopover() {
    return await element(by.id(this.ID_POPOVER_STANDARD)).isPresent();
  }

  async getPlacementExamplePopoverClass() {
    return await element(by.id(this.ID_POPOVER_STANDARD)).getAttribute('class');
  }

  async clickOverDisposeButton() {
    await element(by.id(this.ID_POPOVER_DISPOSE_BUTTON)).click();
  }

  async existsDisposableExamplePopover() {
    return await element(by.id(this.ID_POPOVER_STANDARD)).isPresent();
  }

  async getDisposableExamplePopoverClass() {
    return await element(by.id(this.ID_POPOVER_STANDARD)).getAttribute('class');
  }

  async clickOverFocusTrigger() {
    await this.click(this.ID_RADIO_FOCUS);
  }

  async existsFocusExamplePopover() {
    return await element(by.id(this.ID_POPOVER_STANDARD)).isPresent();
  }

  async getFocusExamplePopoverClass() {
    return await element(by.id(this.ID_POPOVER_STANDARD)).getAttribute('hidden');
  }

}
