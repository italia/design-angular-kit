import { browser, by, element, ElementFinder } from 'protractor';

export class BreadcrumbPage {
  private readonly BREADCRUMB_URL = '/#/componenti/breadcrumb';
  private readonly ID_EXAMPLE_TAB = 'it-tab-label-0-2';

  private readonly ID_BREADCRUMB = 'it-breadcrumb-0';

  private readonly ID_CHECKBOX_BG = 'checkbox-0';

  private readonly ID_BUTTON_ADD = 'add-button';
  private readonly ID_BUTTON_REMOVE = 'remove-button';

  private readonly ID_RADIO_SEPARATOR_SLASH = 'radio-1';
  private readonly ID_RADIO_SEPARATOR_GTHAN = 'radio-2';
  private readonly ID_RADIO_SEPARATOR_TILDE = 'radio-3';

  private readonly ID_RADIO_ICON_IT_FAVORITE = 'radio-4';
  private readonly ID_RADIO_ICON_IT_FACEBOOK = 'radio-5';
  private readonly ID_RADIO_ICON_IT_FLICKR = 'radio-6';

  private readonly CSS_SELECTOR_LABEL_DARK_BG = this.getLabelForAttribute(this.ID_CHECKBOX_BG);

  private readonly CSS_SELECTOR_LABEL_SLASH = this.getLabelForAttribute(this.ID_RADIO_SEPARATOR_SLASH);

  private readonly CSS_SELECTOR_LABEL_GTHAN = this.getLabelForAttribute(this.ID_RADIO_SEPARATOR_GTHAN);

  private readonly CSS_SELECTOR_LABEL_TILDE = this.getLabelForAttribute(this.ID_RADIO_SEPARATOR_TILDE);

  private readonly CSS_SELECTOR_LABEL_FAVORITE = this.getLabelForAttribute(this.ID_RADIO_ICON_IT_FAVORITE);

  private readonly CSS_SELECTOR_LABEL_FACEBOOK = this.getLabelForAttribute(this.ID_RADIO_ICON_IT_FACEBOOK);

  private readonly CSS_SELECTOR_LABEL_FLICKR = this.getLabelForAttribute(this.ID_RADIO_ICON_IT_FLICKR);

  async go() {
    await browser.get(this.BREADCRUMB_URL);
    await element(by.id(this.ID_EXAMPLE_TAB)).click();
    return await browser.sleep(500);
  }

  async isLastItem(el: ElementFinder) {
    const classes = await this.getBreadcrumbItemClasses(el);
    return classes.indexOf('active') > -1;
  }

  async getBreadcrumbClasses() {
    const classes = await element(by.css('.breadcrumb')).getAttribute('class');
    return classes.split(' ');
  }

  async getBreadcrumbItems() {
    return await this.getElementById(this.ID_BREADCRUMB).all(by.css('.breadcrumb-item'));
  }

  async getBreadcrumbItemClasses(item: ElementFinder) {
    const classes = await item.getAttribute('class');
    return classes.split(' ');
  }

  async getBreadcrumbItemsSeparator() {
    return await this.getElementById(this.ID_BREADCRUMB).all(by.css('.separator'));
  }

  async getBreadcrumbItemsIcon() {
    return await this.getElementById(this.ID_BREADCRUMB).all(by.css('.icon'));
  }

  async clickAddButton() {
    await this.getElementById(this.ID_BUTTON_ADD).click();
  }

  async clickRemoveButton() {
    await this.getElementById(this.ID_BUTTON_REMOVE).click();
  }

  async clickBackgroundCheckbox() {
    await element(by.css(this.CSS_SELECTOR_LABEL_DARK_BG)).click();
  }

  async clickSlashSeparator() {
    await element(by.css(this.CSS_SELECTOR_LABEL_SLASH)).click();
  }

  async clickGthanSeparator() {
    await element(by.css(this.CSS_SELECTOR_LABEL_GTHAN)).click();
  }

  async clickTildeSeparator() {
    await element(by.css(this.CSS_SELECTOR_LABEL_TILDE)).click();
  }

  async clickFavoriteIcon() {
    await element(by.css(this.CSS_SELECTOR_LABEL_FAVORITE)).click();
  }

  async clickFacebookIcon() {
    await element(by.css(this.CSS_SELECTOR_LABEL_FACEBOOK)).click();
  }

  async clickFlickrIcon() {
    await element(by.css(this.CSS_SELECTOR_LABEL_FLICKR)).click();
  }

  async hasDarkBackground() {
    const classes = await this.getBreadcrumbClasses();
    return classes.indexOf('dark') > -1;
  }

  private getElementById(id) {
    return element(by.id(id));
  }

  private getLabelForAttribute(attr: string) {
    return `[for="${attr}"]`;
  }

}
