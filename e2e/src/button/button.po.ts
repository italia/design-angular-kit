import { browser, by, element, ExpectedConditions } from 'protractor';

export class ButtonPage {
  private readonly BUTTON_URL = '/#/componenti/button';
  private readonly ID_EXAMPLE_TAB = 'button-examples-tab';

  private readonly ID_BUTTON = 'button-0';
  private readonly ID_CHECKBOX_DISABLE = 'disabled-checkbox';
  private readonly ID_CHECKBOX_BLOCK = 'block-checkbox';
  private readonly ID_CHECKBOX_OUTLINE = 'outline-checkbox';

  public readonly ID_RADIO_STANDARD = 'radio-standard';
  public readonly ID_RADIO_LG = 'radio-lg';
  public readonly ID_RADIO_XS = 'radio-xs';
  public readonly ID_RADIO_SM = 'radio-sm';

  public readonly ID_RADIO_NONE = 'radio-none';
  public readonly ID_RADIO_PRIMARY = 'radio-primary';
  public readonly ID_RADIO_SECONDARY = 'radio-secondary';
  public readonly ID_RADIO_SUCCESS = 'radio-success';
  public readonly ID_RADIO_WARNING = 'radio-warning';
  public readonly ID_RADIO_DANGER = 'radio-danger';
  public readonly ID_RADIO_INFO = 'radio-info';
  public readonly ID_RADIO_LIGHT = 'radio-light';
  public readonly ID_RADIO_DARK = 'radio-dark';

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

  async clickOutlineCheckbox() {
    await this.clickElement(this.ID_CHECKBOX_OUTLINE);
  }

  async isButtonColored() {
    const buttonClasses = await this.getButtonClasses();
    return await (buttonClasses.indexOf('btn-primary') > -1)
      || (buttonClasses.indexOf('btn-secondary') > -1)
      || (buttonClasses.indexOf('btn-success') > -1)
      || (buttonClasses.indexOf('btn-warning') > -1)
      || (buttonClasses.indexOf('btn-danger') > -1)
      || (buttonClasses.indexOf('btn-info') > -1)
      || (buttonClasses.indexOf('btn-light') > -1)
      || (buttonClasses.indexOf('btn-dark') > -1);
  }

  async isButtonOutlined() {
    const buttonClasses = await this.getButtonClasses();
    return await (buttonClasses.indexOf('btn-outline-primary') > -1)
      || (buttonClasses.indexOf('btn-outline-secondary') > -1)
      || (buttonClasses.indexOf('btn-outline-success') > -1)
      || (buttonClasses.indexOf('btn-outline-warning') > -1)
      || (buttonClasses.indexOf('btn-outline-danger') > -1)
      || (buttonClasses.indexOf('btn-outline-info') > -1)
      || (buttonClasses.indexOf('btn-outline-light') > -1)
      || (buttonClasses.indexOf('btn-outline-dark') > -1);
  }

  async isButtonStandardSize() {
    const buttonClasses = await this.getButtonClasses();
    return await !(buttonClasses.indexOf('btn-xs') > -1)
      && !(buttonClasses.indexOf('btn-sm') > -1)
      && !(buttonClasses.indexOf('btn-lg') > -1);
  }
}
