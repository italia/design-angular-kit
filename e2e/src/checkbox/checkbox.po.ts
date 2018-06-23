import { browser, by, element } from 'protractor';

export class CheckboxPage {
  private readonly ID_CHECKBOX_SPUNTATO = 'checkbox-0';
  private readonly ID_CHECKBOX_DISABILITATO = 'checkbox-1';
  private readonly ID_CHECKBOX_RISULTATO = 'checkbox-2';

  // [for="checkbox-0"]
  private readonly CSS_SELECTOR_LABEL_SPUNTATO = this.getLabelForAttribute(this.ID_CHECKBOX_SPUNTATO);

  // [for="checkbox-1"]
  private readonly CSS_SELECTOR_LABEL_DISABILITATO = this.getLabelForAttribute(this.ID_CHECKBOX_DISABILITATO);

  // [for="checkbox-2"]
  private readonly CSS_SELECTOR_LABEL_RISULTATO = this.getLabelForAttribute(this.ID_CHECKBOX_RISULTATO);

  private readonly ATTR_CHECKED = 'checked';
  private readonly ATTR_DISABLED = 'disabled';

  async go() {
    return await browser.get('/checkbox');
  }

  async clickSpuntatoCheckbox() {
    await element(by.css(this.CSS_SELECTOR_LABEL_SPUNTATO)).click();
  }

  async clickDisabilitatoCheckbox() {
    await element(by.css(this.CSS_SELECTOR_LABEL_DISABILITATO)).click();
  }

  async clickRisultatoCheckbox() {
    await element(by.css(this.CSS_SELECTOR_LABEL_RISULTATO)).click();
  }

  async getRisultatoCheckboxChecked() {
    return await this.getRisultatoCheckbox().getAttribute(this.ATTR_CHECKED);
  }

  async getRisultatoCheckboxDisabled() {
    return await this.getRisultatoCheckbox().getAttribute(this.ATTR_DISABLED);
  }

  private getRisultatoCheckbox() {
    return element(by.id(this.ID_CHECKBOX_RISULTATO));
  }

  private getLabelForAttribute(attr: string) {
    return `[for="${attr}"]`;
  }
}
