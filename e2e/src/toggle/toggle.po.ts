import { browser, by, element, ExpectedConditions } from 'protractor';

export class TogglePage {
  private readonly TOGGLE_URL = '/#/componenti/toggle';
  private readonly ID_EXAMPLE_TAB = 'it-tab-label-0-2';

  private readonly ID_TOGGLE_SPUNTATO = 'toggle-0';
  private readonly ID_TOGGLE_DISABILITATO = 'toggle-1';
  private readonly ID_TOGGLE_RISULTATO = 'toggle-2';

  // [for="toggle-0"]
  private readonly CSS_SELECTOR_LABEL_SPUNTATO = this.getLabelForAttribute(this.ID_TOGGLE_SPUNTATO);

  // [for="toggle-1"]
  private readonly CSS_SELECTOR_LABEL_DISABILITATO = this.getLabelForAttribute(this.ID_TOGGLE_DISABILITATO);

  // [for="toggle-2"]
  private readonly CSS_SELECTOR_LABEL_RISULTATO = this.getLabelForAttribute(this.ID_TOGGLE_RISULTATO);

  private readonly ATTR_CHECKED = 'checked';
  private readonly ATTR_DISABLED = 'disabled';

  async go() {
    await browser.get(this.TOGGLE_URL);
    await element(by.id(this.ID_EXAMPLE_TAB)).click();
    return await browser.sleep(500);
  }

  async clickSpuntatoToggle() {
    await element(by.css(this.CSS_SELECTOR_LABEL_SPUNTATO)).click();
  }

  async clickDisabilitatoToggle() {
    await element(by.css(this.CSS_SELECTOR_LABEL_DISABILITATO)).click();
  }

  async clickRisultatoToggle() {
    await element(by.css(this.CSS_SELECTOR_LABEL_RISULTATO)).click();
  }

  async getRisultatoToggleChecked() {
    return await this.getRisultatoToggle().getAttribute(this.ATTR_CHECKED);
  }

  async getRisultatoToggleDisabled() {
    return await this.getRisultatoToggle().getAttribute(this.ATTR_DISABLED);
  }

  private getRisultatoToggle() {
    return element(by.id(this.ID_TOGGLE_RISULTATO));
  }

  private getLabelForAttribute(attr: string) {
    return `[for="${attr}"]`;
  }
}
