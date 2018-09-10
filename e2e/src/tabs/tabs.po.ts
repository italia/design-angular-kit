import { browser, by, element } from 'protractor';

export class TabsPage {
  private readonly BUTTON_URL = '/#/componenti/tabs';
  private readonly ID_EXAMPLE_TAB = 'it-tab-label-0-2';

  private readonly ID_CHECKBOX_DARKTHEME = this.getLabelForAttribute('checkbox-0');
  private readonly ID_CHECKBOX_DISABLE = this.getLabelForAttribute('checkbox-1');
  private readonly ID_CHECKBOX_PILL = this.getLabelForAttribute('checkbox-2');
  private readonly ID_CHECKBOX_SELECT_AFTER_ADDING = this.getLabelForAttribute('checkbox-3');

  private readonly ID_TAB_CONTENT_1 = 'it-tab-content-1-0';
  private readonly ID_TAB_CONTENT_2 = 'it-tab-content-1-1';
  private readonly ID_TAB_CONTENT_3 = 'it-tab-content-1-2';
  private readonly ID_TAB_CONTENT_4 = 'it-tab-content-1-3';

  private readonly ID_TAB_1 = 'it-tab-label-1-0';
  private readonly ID_TAB_2 = 'it-tab-label-1-1';
  private readonly ID_TAB_3 = 'it-tab-label-1-2';
  private readonly ID_TAB_4 = 'it-tab-label-1-3';

  private readonly ID_ADD_BUTTON = 'button-0';

  private getLabelForAttribute(attr: string) {
    return `[for="${attr}"]`;
  }

  private getTabIdByNumber(n: number) {
    switch (n) {
      case 1:
        return this.ID_TAB_1;
      case 2:
        return this.ID_TAB_2;
      case 3:
        return this.ID_TAB_3;
      case 4:
        return this.ID_TAB_4;
      default:
        return null;
    }
  }

  private getTabContentIdByNumber(n: number) {
    switch (n) {
      case 1:
        return this.ID_TAB_CONTENT_1;
      case 2:
        return this.ID_TAB_CONTENT_2;
      case 3:
        return this.ID_TAB_CONTENT_3;
      case 4:
        return this.ID_TAB_CONTENT_4;
      default:
        return null;
    }
  }

  private async getDynamicTabIdByNumber(n: number) {
    const index = n - 1;
    const tabs = await element.all(by.css('.dynamic-tab-group .nav-link'));
    return tabs[index].getAttribute('id');
  }

  private async getDynamicTabContentIdByNumber(n: number) {
    const index = n - 1;
    const tabs = await element.all(by.css('.dynamic-tab-group .tab-pane'));
    return tabs[index].getAttribute('id');
  }

  async go() {
    await browser.get(this.BUTTON_URL);
    await element(by.id(this.ID_EXAMPLE_TAB)).click();
    return await browser.sleep(500);
  }

  async clickElement(id: string) {
    await element(by.css(id)).click();
  }

  async clickDarkThemeCheckbox() {
    await this.clickElement(this.ID_CHECKBOX_DARKTHEME);
  }

  async clickDisabledCheckbox() {
    await this.clickElement(this.ID_CHECKBOX_DISABLE);
  }

  async clickPillCheckbox() {
    await this.clickElement(this.ID_CHECKBOX_PILL);
  }

  async clickSelectAfterAddingCheckbox() {
    await this.clickElement(this.ID_CHECKBOX_SELECT_AFTER_ADDING);
  }

  async clickAddButton() {
    await this.clickElement(`#${this.ID_ADD_BUTTON}`);
  }

  async isNthTabContentShown(n: number) {
    const idTab = this.getTabContentIdByNumber(n);
    const classes = await this.getElementClasses(idTab);
    return classes.includes('show') && classes.includes('active');
  }

  async isNthDynamicTabContentShown(n: number) {
    const idTab = await this.getDynamicTabContentIdByNumber(n);
    const classes = await this.getElementClasses(idTab);
    return classes.includes('show') && classes.includes('active');
  }

  async clickNthTab(n: number) {
    await this.clickElement('#' + this.getTabIdByNumber(n));
  }

  async getDynamicTabGroupNumberOfTabs() {
    const tabs = await element.all(by.css('.dynamic-tab-group .nav-item'));
    return tabs.length;
  }

  async clickNthDynamicTab(n: number) {
    const idTab = await this.getDynamicTabIdByNumber(n);
    await this.clickElement(`#${idTab}`);
  }

  async clickNthDynamicTabRemoveButton(n: number) {
    const idTab = await this.getDynamicTabContentIdByNumber(n);
    await this.clickElement(`#${idTab} button`);
  }

  private async getElementClasses(id: string) {
    const classAttribute = await element(by.id(id)).getAttribute('class');
    return classAttribute.split(' ');
  }
}
