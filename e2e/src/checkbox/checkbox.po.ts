import { browser, by, element } from 'protractor';

export class CheckboxPage {
  private readonly ID_CHECBOX_SPUNTATO = 'checkbox-0';
  private readonly ID_CHECBOX_DISABILITATO = 'checkbox-1';
  private readonly ID_CHECBOX_RISULTATO = 'checkbox-2';

  private readonly ATTR_FOR_LABEL_SPUNTATO = this.getLabelForAttribute(this.ID_CHECBOX_SPUNTATO);
  private readonly ATTR_FOR_LABEL_DISABILITATO = this.getLabelForAttribute(this.ID_CHECBOX_DISABILITATO);
  private readonly ATTR_FOR_LABEL_RISULTATO = this.getLabelForAttribute(this.ID_CHECBOX_RISULTATO);

  private readonly ATTR_CHECKED = 'checked';
  private readonly ATTR_DISABLED = 'disabled';

  async go() {
    return await browser.get('/checkbox');
  }

  async clickSpuntatoCheckbox() {
    await element(by.css(this.ATTR_FOR_LABEL_SPUNTATO)).click();
  }

  async clickDisabilitatoCheckbox() {
    await element(by.css(this.ATTR_FOR_LABEL_DISABILITATO)).click();
  }

  async clickRisultatoCheckbox() {
    await element(by.css(this.ATTR_FOR_LABEL_RISULTATO)).click();
  }

  async getRisultatoCheckboxChecked() {
    return this.getRisultatoCheckbox().getAttribute(this.ATTR_CHECKED);
  }

  async getRisultatoCheckboxDisabled() {
    return this.getRisultatoCheckbox().getAttribute(this.ATTR_DISABLED);
  }

  private getRisultatoCheckbox() {
    return element(by.id(this.ID_CHECBOX_RISULTATO));
  }

  private getLabelForAttribute(attr: string) {
    return `[for="${attr}"]`;
  }
}
