import { browser, by, element, ExpectedConditions } from 'protractor';

export class ButtonPage {
  private readonly BUTTON_URL = '/#/componenti/button';
  private readonly ID_EXAMPLE_TAB = 'button-examples-tab';

  private readonly ID_BUTTON = 'button-21';
  private readonly ID_CHECKBOX_DISABLE = 'disabled-checkbox';
  private readonly ID_CHECKBOX_BLOCK = 'block-checkbox';

  async go() {
    await browser.get(this.BUTTON_URL);
    await element(by.id(this.ID_EXAMPLE_TAB)).click();
    return await browser.sleep(500);
  }

  async clickButton() {
    await element(by.id(this.ID_BUTTON)).click();
  }

  async clickElement(id: string) {
    await element(by.id(id)).click();
  }

  async clickDisabledCheckbox() {
    await this.clickElement(this.ID_CHECKBOX_DISABLE);
  }

  async clickBlockCheckbox() {
    await this.clickElement(this.ID_CHECKBOX_BLOCK);
  }

  async getButtonText() {
    return await element(by.id(this.ID_BUTTON)).getText();
  }

  async getButtonClasses() {
    const classAttribute = await element(by.id(this.ID_BUTTON)).getAttribute('class');
    return classAttribute.split(' ');
  }
}
