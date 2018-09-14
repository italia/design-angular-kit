import { browser, by, element, ExpectedConditions } from 'protractor';

export class ButtonPage {
  private readonly BUTTON_URL = '/#/componenti/button';
  private readonly ID_EXAMPLE_TAB = 'it-tab-label-0-2';

  private readonly ID_BUTTON = 'button-0';
  private readonly ID_CHECKBOX_DISABLE = this.getLabelForAttribute('checkbox-0');
  private readonly ID_CHECKBOX_BLOCK = this.getLabelForAttribute('checkbox-1');
  private readonly ID_CHECKBOX_OUTLINE = this.getLabelForAttribute('checkbox-2');

  public readonly ID_RADIO_STANDARD = this.getLabelForAttribute('radio-1');
  public readonly ID_RADIO_LG = this.getLabelForAttribute('radio-2');
  public readonly ID_RADIO_SM = this.getLabelForAttribute('radio-3');
  public readonly ID_RADIO_XS = this.getLabelForAttribute('radio-4');

  public readonly ID_RADIO_NONE = this.getLabelForAttribute('radio-6');
  public readonly ID_RADIO_PRIMARY = this.getLabelForAttribute('radio-7');
  public readonly ID_RADIO_SECONDARY = this.getLabelForAttribute('radio-8');
  public readonly ID_RADIO_SUCCESS = this.getLabelForAttribute('radio-9');
  public readonly ID_RADIO_WARNING = this.getLabelForAttribute('radio-10');
  public readonly ID_RADIO_DANGER = this.getLabelForAttribute('radio-11');
  public readonly ID_RADIO_INFO = this.getLabelForAttribute('radio-12');
  public readonly ID_RADIO_LIGHT = this.getLabelForAttribute('radio-13');
  public readonly ID_RADIO_DARK = this.getLabelForAttribute('radio-14');

  private getLabelForAttribute(attr: string) {
    return `[for="${attr}"]`;
  }

  async go() {
    await browser.get(this.BUTTON_URL);
    await element(by.id(this.ID_EXAMPLE_TAB)).click();
    return await browser.sleep(500);
  }

  async clickButton() {
    await element(by.id(this.ID_BUTTON)).click();
  }

  async clickElement(id: string) {
    await element(by.css(id)).click();
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
