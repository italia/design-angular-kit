import { browser, by, element, ExpectedConditions } from 'protractor';

export class FormInputPage {
  private readonly FORM_INPUT_URL = '/#/componenti/form-input';
  private readonly ID_EXAMPLE_TAB = 'form-input-examples-tab';

  private readonly ID_FORM_INPUT = 'interactive-input-0';

  private readonly ID_CHECKBOX_DISABLED = 'checkbox-0';
  private readonly ID_CHECKBOX_READONLY = 'checkbox-1';
  private readonly ID_CHECKBOX_LABEL = 'checkbox-2';
  private readonly ID_CHECKBOX_PLACEHOLDER = 'checkbox-3';
  private readonly ID_CHECKBOX_NOTE = 'checkbox-4';

  private readonly ID_RADIO_TYPE_TEXT = 'radio-1';
  private readonly ID_RADIO_TYPE_EMAIL = 'radio-2';
  private readonly ID_RADIO_TYPE_PASSWORD = 'radio-3';
  private readonly ID_RADIO_TYPE_NUMBER = 'radio-4';
  private readonly ID_RADIO_TYPE_SEARCH = 'radio-5';


  private readonly ID_RADIO_ICON_NONE = 'radio-7';
  private readonly ID_RADIO_ICON_FAVORITE = 'radio-8';
  private readonly ID_RADIO_ICON_LINK = 'radio-9';

  // [for="checkbox-0"]
  private readonly CSS_SELECTOR_LABEL_CHECKBOX_DISABLED = this.getLabelForAttribute(this.ID_CHECKBOX_DISABLED);

  // [for="checkbox-1"]
  private readonly CSS_SELECTOR_LABEL_CHECKBOX_READONLY = this.getLabelForAttribute(this.ID_CHECKBOX_READONLY);

  // [for="checkbox-2"]
  private readonly CSS_SELECTOR_LABEL_CHECKBOX_LABEL = this.getLabelForAttribute(this.ID_CHECKBOX_LABEL);

  // [for="checkbox-3"]
  private readonly CSS_SELECTOR_LABEL_CHECKBOX_PLACEHOLDER = this.getLabelForAttribute(this.ID_CHECKBOX_PLACEHOLDER);

  // [for="checkbox-4"]
  private readonly CSS_SELECTOR_LABEL_CHECKBOX_NOTE = this.getLabelForAttribute(this.ID_CHECKBOX_NOTE);

  // [for="radio-1"]
  private readonly CSS_SELECTOR_LABEL_RADIO_TYPE_TEXT = this.getLabelForAttribute(this.ID_RADIO_TYPE_TEXT);

  // [for="radio-2"]
  private readonly CSS_SELECTOR_LABEL_RADIO_TYPE_EMAIL = this.getLabelForAttribute(this.ID_RADIO_TYPE_EMAIL);

  // [for="radio-3"]
  private readonly CSS_SELECTOR_LABEL_RADIO_TYPE_PASSWORD = this.getLabelForAttribute(this.ID_RADIO_TYPE_PASSWORD);

  // [for="radio-4"]
  private readonly CSS_SELECTOR_LABEL_RADIO_TYPE_NUMBER = this.getLabelForAttribute(this.ID_RADIO_TYPE_NUMBER);

  // [for="radio-5"]
  private readonly CSS_SELECTOR_LABEL_RADIO_TYPE_SEARCH = this.getLabelForAttribute(this.ID_RADIO_TYPE_SEARCH);

  // [for="radio-7"]
  private readonly CSS_SELECTOR_LABEL_RADIO_ICON_NONE = this.getLabelForAttribute(this.ID_RADIO_ICON_NONE);

  // [for="radio-8"]
  private readonly CSS_SELECTOR_LABEL_RADIO_ICON_FAVORITE = this.getLabelForAttribute(this.ID_RADIO_ICON_FAVORITE);

  // [for="radio-9"]
  private readonly CSS_SELECTOR_LABEL_RADIO_ICON_LINK = this.getLabelForAttribute(this.ID_RADIO_ICON_LINK);

  // Template Driven Validation
  private readonly ID_FORM_TDV_NAME = 'myInput';
  private readonly ID_ERROR_TDV_REQUIRED = 'tdv-required';
  private readonly ID_ERROR_TDV_MINLENGTH = 'tdv-minlength';
  private readonly ID_ERROR_TDV_MAXLENGTH = 'tdv-maxlength';
  private readonly ID_ERROR_TDV_PATTERN = 'tdv-pattern';

  // Model Driven Validation
  private readonly ID_FORM_MDV_ID = 'form-input-2';
  private readonly ID_ERROR_MDV_REQUIRED = 'mdv-required';
  private readonly ID_ERROR_MDV_MINLENGTH = 'mdv-minlength';
  private readonly ID_ERROR_MDV_MAXLENGTH = 'mdv-maxlength';
  private readonly ID_ERROR_MDV_PATTERN = 'mdv-pattern';

  async go() {
    await browser.get(this.FORM_INPUT_URL);
    await browser.executeScript(`document.querySelector('header').remove()`);
    await element(by.id(this.ID_EXAMPLE_TAB)).click();
    return await browser.sleep(500);
  }

  async clickDisabledCheckbox() {
    await element(by.css(this.CSS_SELECTOR_LABEL_CHECKBOX_DISABLED)).click();
  }

  async clickReadonlyCheckbox() {
    await element(by.css(this.CSS_SELECTOR_LABEL_CHECKBOX_READONLY)).click();
  }

  async clickLabelCheckbox() {
    await element(by.css(this.CSS_SELECTOR_LABEL_CHECKBOX_LABEL)).click();
  }

  async clickPlaceholderCheckbox() {
    await element(by.css(this.CSS_SELECTOR_LABEL_CHECKBOX_PLACEHOLDER)).click();
  }

  async clickNoteCheckbox() {
    await element(by.css(this.CSS_SELECTOR_LABEL_CHECKBOX_NOTE)).click();
  }

  async clickTextRadio() {
    await element(by.css(this.CSS_SELECTOR_LABEL_RADIO_TYPE_TEXT)).click();
  }

  async clickNumberRadio() {
    await element(by.css(this.CSS_SELECTOR_LABEL_RADIO_TYPE_NUMBER)).click();
  }

  async clickPasswordRadio() {
    await element(by.css(this.CSS_SELECTOR_LABEL_RADIO_TYPE_PASSWORD)).click();
  }

  async clickEmailRadio() {
    await element(by.css(this.CSS_SELECTOR_LABEL_RADIO_TYPE_EMAIL)).click();
  }

  async clickSearchRadio() {
    await element(by.css(this.CSS_SELECTOR_LABEL_RADIO_TYPE_SEARCH)).click();
  }

  async clickNoIconRadio() {
    await element(by.css(this.CSS_SELECTOR_LABEL_RADIO_ICON_NONE)).click();
  }

  async clickFavoriteIconRadio() {
    await element(by.css(this.CSS_SELECTOR_LABEL_RADIO_ICON_FAVORITE)).click();
  }

  async clickLinkIconRadio() {
    await element(by.css(this.CSS_SELECTOR_LABEL_RADIO_ICON_LINK)).click();
  }

  async getFormInputClass() {
    return await this.getFormInput().getAttribute('class');
  }

  async typeInsideFormInput(value: string) {
    await this.getFormInput().clear();
    await this.getFormInput().sendKeys(value);
    return await this.getFormInputValue();
  }

  async getFormInputValue() {
    return await this.getFormInput().getAttribute('value');
  }

  async isFormInputDisabled() {
    return await this.getFormInput().getAttribute('disabled');
  }

  async isFormInputReadonly() {
    const hasReadonlyAttribute = await this.getFormInput().getAttribute('readonly');
    const hasReadonlyClass = await this.getFormInput().getAttribute('class');
    return `${hasReadonlyAttribute}` === 'true' && hasReadonlyClass.indexOf('form-control-plaintext') > -1;
  }

  async isPasswordVisible() {
    const inputType = await this.getFormInput().getAttribute('type');
    return inputType === 'text';
  }

  async hasFormInputIcon() {
    const formInputContainer = this.getFromInputContainer();
    return await formInputContainer.element(by.css('i')).isPresent();
  }

  async getFormInputIcon() {
    return await this.getFromInputContainer().element(by.css('i'));
  }

  async getFormInputIconClass() {
    return await this.getFromInputContainer().element(by.css('i')).getAttribute('class');
  }

  async hasFormInputNote() {
    const formInputContainer = this.getFromInputContainer();
    return await formInputContainer.element(by.css('small')).isPresent();
  }

  async hasFormInputPasswordToggleButton() {
    return await this.getFormInputPasswordToggleButton().isPresent();
  }

  async clickFormInputPasswordToggleButton() {
    return await this.getFormInputPasswordToggleButton().click();
  }

  async getFormInputPasswordToggleButtonClass() {
    return await this.getFormInputPasswordToggleButton().getAttribute('class');
  }

  private getFormInput() {
    return this.getFromInputContainer().element(by.xpath(`//input[@id='${this.ID_FORM_INPUT}']`));
  }

  private getFromInputContainer() {
    return element(by.xpath(`//it-input[@id='${this.ID_FORM_INPUT}']`)).element(by.css('.form-group'));
  }

  private getFormInputPasswordToggleButton() {
    return this.getFromInputContainer().element(by.css('span'));
  }

  private getLabelForAttribute(attr: string) {
    return `[for="${attr}"]`;
  }

  async hasRequiredError() {
    return element(by.id(this.ID_ERROR_TDV_REQUIRED)).isPresent();
  }

  async hasMinlengthError() {
    return element(by.id(this.ID_ERROR_TDV_MINLENGTH)).isPresent();
  }

  async hasMaxlengthError() {
    return element(by.id(this.ID_ERROR_TDV_MAXLENGTH)).isPresent();
  }

  async hasPatternError() {
    return element(by.id(this.ID_ERROR_TDV_PATTERN)).isPresent();
  }

  async typeInsideTemplateDrivenValidationFormInput(value: string) {
    await this.getTemplateDrivenValidationFormInput().clear();
    await this.getTemplateDrivenValidationFormInput().sendKeys(value);
  }

  private getTemplateDrivenValidationFormInput() {
    return this.getFromInputContainer().element(by.xpath(`//input[@name='${this.ID_FORM_TDV_NAME}']`));
  }

  async typeInsideModelDrivenValidationFormInput(value: string) {
    await this.getModelDrivenValidationFormInput().clear();
    await this.getModelDrivenValidationFormInput().sendKeys(value);
  }

  private getModelDrivenValidationFormInput() {
    return this.getFromInputContainer().element(by.xpath(`//input[@id='${this.ID_FORM_MDV_ID}']`));
  }

  async hasRequiredModelError() {
    return element(by.id(this.ID_ERROR_MDV_REQUIRED)).isPresent();
  }

  async hasMinlengthModelError() {
    return element(by.id(this.ID_ERROR_MDV_MINLENGTH)).isPresent();
  }

  async hasMaxlengthModelError() {
    return element(by.id(this.ID_ERROR_MDV_MAXLENGTH)).isPresent();
  }

  async hasPatternModelError() {
    return element(by.id(this.ID_ERROR_MDV_PATTERN)).isPresent();
  }

  async hasRelatedEntries() {
    return await element(by.css('.autocomplete-wrap')).isPresent();
  }

  async getRelatedEntries() {
    const list = element(by.css('.autocomplete-wrap'));
    const entries = await list.all(by.tagName('li'));
    return entries;
  }
}
