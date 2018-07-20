import { browser, by, element, ExpectedConditions } from 'protractor';

export class RadioPage {
  private readonly RADIO_URL = '/componenti/radio';
  private readonly ID_EXAMPLE_TAB = 'radio-examples-tab';

  private readonly ID_CHECKBOX_DISABILITATO = 'checkbox-0';
  private readonly ID_RADIO_ROSSO = 'radio-4';
  private readonly ID_RADIO_BLU = 'radio-5';
  private readonly ID_RADIO_GIALLO = 'radio-6';
  private readonly ID_RADIO_USA = 'radio-1';
  private readonly ID_RADIO_ITALIA = 'radio-2';
  private readonly ID_RADIO_SPAGNA = 'radio-3';

  // [for="checkbox-0"]
  private readonly CSS_SELECTOR_LABEL_DISABILITATO = this.getLabelForAttribute(this.ID_CHECKBOX_DISABILITATO);

  // [for="radio-4"]
  private readonly CSS_SELECTOR_LABEL_ROSSO = this.getLabelForAttribute(this.ID_RADIO_ROSSO);

  // [for="radio-5"]
  private readonly CSS_SELECTOR_LABEL_BLU = this.getLabelForAttribute(this.ID_RADIO_BLU);

  // [for="radio-6"]
  private readonly CSS_SELECTOR_LABEL_GIALLO = this.getLabelForAttribute(this.ID_RADIO_GIALLO);

  // [for="radio-1"]
  private readonly CSS_SELECTOR_LABEL_USA = this.getLabelForAttribute(this.ID_RADIO_USA);

  // [for="radio-2"]
  private readonly CSS_SELECTOR_LABEL_ITALIA = this.getLabelForAttribute(this.ID_RADIO_ITALIA);

  // [for="radio-1"]
  private readonly CSS_SELECTOR_LABEL_SPAGNA = this.getLabelForAttribute(this.ID_RADIO_SPAGNA);

  private readonly ATTR_CHECKED = 'checked';
  private readonly ATTR_DISABLED = 'disabled';

  async go() {
    await browser.get(this.RADIO_URL);
    await element(by.id(this.ID_EXAMPLE_TAB)).click();
    return await browser.sleep(500);
  }

  async clickDisabilitatoCheckbox() {
    await element(by.css(this.CSS_SELECTOR_LABEL_DISABILITATO)).click();
  }

  async clickRossoRadio() {
    await element(by.css(this.CSS_SELECTOR_LABEL_ROSSO)).click();
  }

  async clickBluRadio() {
    await element(by.css(this.CSS_SELECTOR_LABEL_BLU)).click();
  }

  async clickGialloRadio() {
    await element(by.css(this.CSS_SELECTOR_LABEL_GIALLO)).click();
  }

  async clickUsaRadio() {
    await element(by.css(this.CSS_SELECTOR_LABEL_USA)).click();
  }

  async clickItaliaRadio() {
    await element(by.css(this.CSS_SELECTOR_LABEL_ITALIA)).click();
  }

  async clickSpagnaRadio() {
    await element(by.css(this.CSS_SELECTOR_LABEL_SPAGNA)).click();
  }

  async getRadioRossoChecked() {
    return await this.getElementById(this.ID_RADIO_ROSSO).getAttribute(this.ATTR_CHECKED);
  }

  async getRadioBluChecked() {
    return await this.getElementById(this.ID_RADIO_BLU).getAttribute(this.ATTR_CHECKED);
  }

  async getRadioGialloChecked() {
    return await this.getElementById(this.ID_RADIO_GIALLO).getAttribute(this.ATTR_CHECKED);
  }

  async getRadioUsaChecked() {
    return await this.getElementById(this.ID_RADIO_USA).getAttribute(this.ATTR_CHECKED);
  }

  async getRadioItaliaChecked() {
    return await this.getElementById(this.ID_RADIO_ITALIA).getAttribute(this.ATTR_CHECKED);
  }

  async getRadioSpagnaChecked() {
    return await this.getElementById(this.ID_RADIO_SPAGNA).getAttribute(this.ATTR_CHECKED);
  }

  async getRadioRossoDisabled() {
    return await this.getElementById(this.ID_RADIO_ROSSO).getAttribute(this.ATTR_DISABLED);
  }

  async getRadioBluDisabled() {
    return await this.getElementById(this.ID_RADIO_BLU).getAttribute(this.ATTR_DISABLED);
  }

  async getRadioGialloDisabled() {
    return await this.getElementById(this.ID_RADIO_GIALLO).getAttribute(this.ATTR_DISABLED);
  }

  private getElementById(id) {
    return element(by.id(id));
  }

  private getLabelForAttribute(attr: string) {
    return `[for="${attr}"]`;
  }
}
