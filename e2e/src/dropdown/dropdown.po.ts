import { browser, by, element } from 'protractor';

export class DropdownPage {
  public readonly DROPDOWN_BUTTON_DEFAULT_CLASS = 'btn-dropdown';
  public readonly DROPDOWN_BUTTON_PRIMARY_CLASS = 'btn-primary';
  public readonly DROPDOWN_BUTTON_SECONDARY_CLASS = 'btn-secondary';

  public readonly DROPDOWN_BUTTON_CLICK_TEXT = 'Click me';
  public readonly DROPDOWN_BUTTON_CHECK_TEXT = 'Check';
  public readonly DROPDOWN_BUTTON_HELLO_TEXT = 'Hello world!';

  public readonly ITEM_DEFAULT_CLASS = 'list-item';
  public readonly ITEM_ACTIVE_CLASS = 'active';
  public readonly ITEM_DISABLED_CLASS = 'disabled';
  public readonly ITEM_LARGE_CLASS = 'large';

  public readonly FAVORITE_ICON_CLASS = 'it-favorite';
  public readonly LINK_ICON_CLASS = 'it-link';

  public readonly DROPDOWN_ITEM_LEFT_ICON_CLASS = 'left-icon';
  public readonly DROPDOWN_ITEM_RIGHT_ICON_CLASS = 'right-icon';

  public readonly ICON_LEFT_PLACEMENT_CLASS = 'left';
  public readonly ICON_RIGHT_PLACEMENT_CLASS = 'right';

  private readonly DROPDOWN_URL = '/#/componenti/dropdown';
  private readonly ID_EXAMPLE_TAB = 'dropdown-examples-tab';

  private readonly DROPDOWN_ID = 'dropdown-0';
  private readonly DROPDOWN_MENU_BUTTON_ID = 'dropdownMenuButton';
  private readonly DROPDOWN_MENU_CLASS = 'dropdown-menu';

  private readonly FULLWIDTH_CLASS = 'full-width';
  private readonly DARKBG_CLASS = 'dark';

  private readonly FULLWIDTH_CHECKBOX_ID = 'checkbox-0';
  private readonly FULLWIDTH_CHECKBOX_LABEL = this.getLabelForAttribute(this.FULLWIDTH_CHECKBOX_ID);

  private readonly DARKBG_CHECKBOX_ID = 'checkbox-1';
  private readonly DARKBG_CHECKBOX_LABEL = this.getLabelForAttribute(this.DARKBG_CHECKBOX_ID);

  private readonly CLICK_RADIO_ID = 'radio-1';
  private readonly CLICK_RADIO_LABEL = this.getLabelForAttribute(this.CLICK_RADIO_ID);

  private readonly CHECK_RADIO_ID = 'radio-2';
  private readonly CHECK_RADIO_LABEL = this.getLabelForAttribute(this.CHECK_RADIO_ID);

  private readonly HELLO_RADIO_ID = 'radio-3';
  private readonly HELLO_RADIO_LABEL = this.getLabelForAttribute(this.HELLO_RADIO_ID);

  private readonly NONE_RADIO_ID = 'radio-5';
  private readonly NONE_RADIO_LABEL = this.getLabelForAttribute(this.NONE_RADIO_ID);

  private readonly PRIMARY_RADIO_ID = 'radio-6';
  private readonly PRIMARY_RADIO_LABEL = this.getLabelForAttribute(this.PRIMARY_RADIO_ID);

  private readonly SECONDARY_RADIO_ID = 'radio-7';
  private readonly SECONDARY_RADIO_LABEL = this.getLabelForAttribute(this.SECONDARY_RADIO_ID);

  private readonly DROPDOWN_ITEM_ID = 'dropdown-item-0';

  private readonly ACTIVE_ITEM_CHECKBOX_ID = 'checkbox-2';
  private readonly ACTIVE_ITEM_CHECKBOX_LABEL = this.getLabelForAttribute(this.ACTIVE_ITEM_CHECKBOX_ID);

  private readonly DISABLED_ITEM_CHECKBOX_ID = 'checkbox-3';
  private readonly DISABLED_ITEM_CHECKBOX_LABEL = this.getLabelForAttribute(this.DISABLED_ITEM_CHECKBOX_ID);

  private readonly LARGE_ITEM_CHECKBOX_ID = 'checkbox-4';
  private readonly LARGE_ITEM_CHECKBOX_LABEL = this.getLabelForAttribute(this.LARGE_ITEM_CHECKBOX_ID);

  private readonly NULL_ICON_ITEM_RADIO_ID = 'radio-15';
  private readonly NULL_ICON_ITEM_RADIO_LABEL = this.getLabelForAttribute(this.NULL_ICON_ITEM_RADIO_ID);

  private readonly FAVORITE_ICON_ITEM_RADIO_ID = 'radio-16';
  private readonly FAVORITE_ICON_ITEM_RADIO_LABEL = this.getLabelForAttribute(this.FAVORITE_ICON_ITEM_RADIO_ID);

  private readonly LINK_ICON_ITEM_RADIO_ID = 'radio-17';
  private readonly LINK_ICON_ITEM_RADIO_LABEL = this.getLabelForAttribute(this.LINK_ICON_ITEM_RADIO_ID);

  private readonly LEFT_ICON_ITEM_RADIO_ID = 'radio-19';
  private readonly LEFT_ICON_ITEM_RADIO_LABEL = this.getLabelForAttribute(this.LEFT_ICON_ITEM_RADIO_ID);

  private readonly RIGHT_ICON_ITEM_RADIO_ID = 'radio-20';
  private readonly RIGHT_ICON_ITEM_RADIO_LABEL = this.getLabelForAttribute(this.RIGHT_ICON_ITEM_RADIO_ID);

  async go() {
    await browser.get(this.DROPDOWN_URL);
    await element(by.id(this.ID_EXAMPLE_TAB)).click();
    return await browser.sleep(500);
  }

  private getLabelForAttribute(attr: string) {
    return `[for="${attr}"]`;
  }

  async clickOnElement(cssClass: string) {
    await element(by.css(cssClass)).click();
  }

  async clickDropdownButton() {
    await element(by.id(this.DROPDOWN_MENU_BUTTON_ID)).click();
  }

  async clickDarkBackgroundRadio() {
    await this.clickOnElement(this.DARKBG_CHECKBOX_LABEL);
  }

  async clickFullWidthRadio() {
    await this.clickOnElement(this.FULLWIDTH_CHECKBOX_LABEL);
  }

  async clickPrimaryColorRadio() {
    await this.clickOnElement(this.PRIMARY_RADIO_LABEL);
  }

  async clickSecondaryColorRadio() {
    await this.clickOnElement(this.SECONDARY_RADIO_LABEL);
  }

  async clickClickRadio() {
    await this.clickOnElement(this.CLICK_RADIO_LABEL);
  }

  async clickCheckRadio() {
    await this.clickOnElement(this.CHECK_RADIO_LABEL);
  }

  async clickHelloRadio() {
    await this.clickOnElement(this.HELLO_RADIO_LABEL);
  }

  async getDropdownClasses() {
    const classAttribute = await element(by.className(this.DROPDOWN_MENU_CLASS)).getAttribute('class');
    return classAttribute.split(' ');
  }

  async isDropdownFullWidth() {
    const classes = await this.getDropdownClasses();
    return await classes.indexOf(this.FULLWIDTH_CLASS) > -1;
  }

  async isDropdownDark() {
    const classes = await this.getDropdownClasses();
    return await classes.indexOf(this.DARKBG_CLASS) > -1;
  }

  async getDropdownButtonText() {
    return await element(by.id(this.DROPDOWN_MENU_BUTTON_ID)).getText();
  }

  async getDropdownButtonClasses() {
    const classAttribute = await element(by.id(this.DROPDOWN_MENU_BUTTON_ID)).getAttribute('class');
    return classAttribute.split(' ');
  }

  // ITEMS
  async clickActiveItemCheckbox() {
    await this.clickOnElement(this.ACTIVE_ITEM_CHECKBOX_LABEL);
  }

  async clickDisabledItemCheckbox() {
    await this.clickOnElement(this.DISABLED_ITEM_CHECKBOX_LABEL);
  }

  async clickLargeItemCheckbox() {
    await this.clickOnElement(this.LARGE_ITEM_CHECKBOX_LABEL);
  }

  async clickNullIconItemRadio() {
    await this.clickOnElement(this.NULL_ICON_ITEM_RADIO_LABEL);
  }

  async clickFavoriteIconItemRadio() {
    await this.clickOnElement(this.FAVORITE_ICON_ITEM_RADIO_LABEL);
  }

  async clickLinkIconItemRadio() {
    await this.clickOnElement(this.LINK_ICON_ITEM_RADIO_LABEL);
  }

  async clickIconLeftPosition() {
    await this.clickOnElement(this.LEFT_ICON_ITEM_RADIO_LABEL);
  }

  async clickIconRightPosition() {
    await this.clickOnElement(this.RIGHT_ICON_ITEM_RADIO_LABEL);
  }

  async isIconSectionPresent() {
    const dropdownItemElement = element(by.id(this.DROPDOWN_ITEM_ID));
    const dropdownItemAnchor = dropdownItemElement.element(by.css('a'));
    return await dropdownItemAnchor.element(by.css('i')).isPresent();
  }

  async getDropdownItemClasses() {
    const dropdownItemElement = element(by.id(this.DROPDOWN_ITEM_ID));
    const dropdownItemClass = await dropdownItemElement.element(by.css('a')).getAttribute('class');
    return dropdownItemClass.split(' ');
  }

  async getDropdownItemIconClasses() {
    const dropdownItemElement = element(by.id(this.DROPDOWN_ITEM_ID));
    const dropdownItemAnchor = dropdownItemElement.element(by.css('a'));
    const dropdownItemIconClass = await dropdownItemAnchor.element(by.css('i')).getAttribute('class');
    return dropdownItemIconClass.split(' ');
  }
}
