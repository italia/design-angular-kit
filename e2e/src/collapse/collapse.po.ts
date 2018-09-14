import { browser, by, element } from 'protractor';

export class CollapsePage {
  private readonly COLLAPSE_URL = '/#/componenti/collapse';
  private readonly ID_EXAMPLE_TAB = 'it-tab-label-0-2';

  private readonly ID_BUTTON = 'button-0';
  private readonly ID_DIV_0 = 'collapseExample';

  private readonly ID_CHECKBOX_ACCORDION = this.getLabelForAttribute('checkbox-0');

  private readonly ID_ITEM_0_HEADING = 'collapse-item-0-heading';
  private readonly ID_ITEM_0 = 'collapse-item-0';

  private readonly ID_ITEM_1_HEADING = 'collapse-item-1-heading';
  private readonly ID_ITEM_1 = 'collapse-item-1';

  private readonly ID_ITEM_2_HEADING = 'collapse-item-2-heading';
  private readonly ID_ITEM_2 = 'collapse-item-2';

  async go() {
    await browser.get(this.COLLAPSE_URL);
    await element(by.id(this.ID_EXAMPLE_TAB)).click();
    return await browser.sleep(500);
  }

  private getLabelForAttribute(attr: string) {
    return `[for="${attr}"]`;
  }

  async existsButton() {
    return await element(by.id(this.ID_BUTTON)).isPresent();
  }

  async clickButton() {
    await element(by.id(this.ID_BUTTON)).click();
  }

  async isDiv0Visible() {
    return await element(by.id(this.ID_DIV_0)).isDisplayed();
  }

  async clickCheckbox() {
    await element(by.css(this.ID_CHECKBOX_ACCORDION)).click();
  }

  async clickGroup0Button() {
    await element(by.id(this.ID_ITEM_0_HEADING)).click();
  }

  async clickGroup1Button() {
    await element(by.id(this.ID_ITEM_1_HEADING)).click();
  }

  async clickGroup2Button() {
    await element(by.id(this.ID_ITEM_2_HEADING)).click();
  }

  async isItem0Visible() {
    return await element(by.id(this.ID_ITEM_0)).isDisplayed();
  }

  async isItem1Visible() {
    return await element(by.id(this.ID_ITEM_1)).isDisplayed();
  }

  async isItem2Visible() {
    return await element(by.id(this.ID_ITEM_2)).isDisplayed();
  }
}
