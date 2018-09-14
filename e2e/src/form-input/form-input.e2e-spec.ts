import { browser, ElementFinder } from 'protractor';
import { FormInputPage } from './form-input.po';

describe('Form Input', () => {
  let page: FormInputPage;

  beforeEach(async() => {
    page = new FormInputPage();
    await page.go();
  });

  it('dovrebbe iniziare avvalorato per poi essere riavvalorato', async () => {
    expect(await page.getFormInputValue()).toBe('myNgModel');

    await page.typeInsideFormInput('value');

    expect(await page.getFormInputValue()).toBe('value');

    await page.typeInsideFormInput('test');

    expect(await page.getFormInputValue()).toBe('test');
  });

  it('dovrebbe poter essere disabilitato', async () => {
    expect(await page.getFormInputValue()).toBe('myNgModel');
    expect(await page.isFormInputDisabled()).toBeFalsy();

    await page.clickDisabledCheckbox();
    expect(await page.isFormInputDisabled()).toBeTruthy();

    expect(page.typeInsideFormInput('value')).toThrowError();
    expect(await page.getFormInputValue()).toBe('myNgModel');
  });

  it('dovrebbe poter essere in sola lettura', async () => {
    expect(await page.getFormInputValue()).toBe('myNgModel');
    expect(await page.isFormInputReadonly()).toBeFalsy();

    await page.clickReadonlyCheckbox();
    expect(await page.isFormInputReadonly()).toBeTruthy();

    expect(page.typeInsideFormInput('value')).toThrowError();
    expect(await page.getFormInputValue()).toBe('myNgModel');
  });

  it('dovrebbe poter avere una nota opzionale sotto il campo', async () => {
    expect(await page.hasFormInputNote()).toBeFalsy();

    await page.clickNoteCheckbox();

    expect(await page.hasFormInputNote()).toBeTruthy();
  });

  it('dovrebbe essere cambiato a campo numero per poi essere riavvalorato', async () => {
    expect(await page.getFormInputValue()).toBe('myNgModel');

    await page.clickNumberRadio();

    expect(await page.getFormInputValue()).toBe('');

    await page.typeInsideFormInput('12e1');

    expect(await page.getFormInputValue()).toBe('12e1');

    await page.typeInsideFormInput('12e1t');

    expect(await page.getFormInputValue()).toBe('12e1');
  });

  it('dovrebbe poter cambiare l\'icona del form', async () => {
    await page.clickNoIconRadio();

    expect(await page.hasFormInputIcon()).toBeFalsy();

    await page.clickFavoriteIconRadio();

    expect(await page.hasFormInputIcon()).toBeTruthy();

    let iconClass = await page.getFormInputIconClass();
    const hasFavoriteIcon = iconClass.indexOf('it-favorite') > -1;
    expect(hasFavoriteIcon).toBeTruthy();

    await page.clickLinkIconRadio();

    expect(await page.hasFormInputIcon()).toBeTruthy();

    iconClass = await page.getFormInputIconClass();
    const hasLinkIcon = iconClass.indexOf('it-link') > -1;
    expect(hasLinkIcon).toBeTruthy();
  });

  it('dovrebbe poter passare da password nascosta a password visibile', async () => {
    await page.clickTextRadio();

    expect(await page.hasFormInputPasswordToggleButton()).toBeFalsy();

    await page.clickPasswordRadio();

    expect(await page.hasFormInputPasswordToggleButton()).toBeTruthy();

    let toggleButtonClass = await page.getFormInputPasswordToggleButtonClass();
    const eyeOn = 'btn-eye eye-on';
    expect(toggleButtonClass).toBe(eyeOn);

    await page.clickFormInputPasswordToggleButton();

    toggleButtonClass = await page.getFormInputPasswordToggleButtonClass();
    const eyeOff = 'btn-eye eye-off';
    expect(toggleButtonClass).toBe(eyeOff);
  });

  it('dovrebbe poter sfruttare la validazione template driven', async () => {
    expect(await page.hasRequiredError()).toBeTruthy();
    expect(await page.hasMinlengthError()).toBeFalsy();
    expect(await page.hasMaxlengthError()).toBeFalsy();
    expect(await page.hasPatternError()).toBeFalsy();

    await page.typeInsideTemplateDrivenValidationFormInput('c');
    expect(await page.hasRequiredError()).toBeFalsy();
    expect(await page.hasMinlengthError()).toBeTruthy();
    expect(await page.hasMaxlengthError()).toBeFalsy();
    expect(await page.hasPatternError()).toBeTruthy();

    await page.typeInsideTemplateDrivenValidationFormInput('ab');
    expect(await page.hasRequiredError()).toBeFalsy();
    expect(await page.hasMinlengthError()).toBeTruthy();
    expect(await page.hasMaxlengthError()).toBeFalsy();
    expect(await page.hasPatternError()).toBeFalsy();

    await page.typeInsideTemplateDrivenValidationFormInput('aba');
    expect(await page.hasRequiredError()).toBeFalsy();
    expect(await page.hasMinlengthError()).toBeFalsy();
    expect(await page.hasMaxlengthError()).toBeFalsy();
    expect(await page.hasPatternError()).toBeFalsy();

    await page.typeInsideTemplateDrivenValidationFormInput('abc');
    expect(await page.hasRequiredError()).toBeFalsy();
    expect(await page.hasMinlengthError()).toBeFalsy();
    expect(await page.hasMaxlengthError()).toBeFalsy();
    expect(await page.hasPatternError()).toBeTruthy();

    await page.typeInsideTemplateDrivenValidationFormInput('ababababababa');
    expect(await page.hasRequiredError()).toBeFalsy();
    expect(await page.hasMinlengthError()).toBeFalsy();
    expect(await page.hasMaxlengthError()).toBeTruthy();
    expect(await page.hasPatternError()).toBeFalsy();

    await page.typeInsideTemplateDrivenValidationFormInput('ababacbabababa');
    expect(await page.hasRequiredError()).toBeFalsy();
    expect(await page.hasMinlengthError()).toBeFalsy();
    expect(await page.hasMaxlengthError()).toBeTruthy();
    expect(await page.hasPatternError()).toBeTruthy();
  });

  it('dovrebbe poter sfruttare la validazione model driven', async () => {
    expect(await page.hasRequiredModelError()).toBeTruthy();
    expect(await page.hasMinlengthModelError()).toBeFalsy();
    expect(await page.hasMaxlengthModelError()).toBeFalsy();
    expect(await page.hasPatternModelError()).toBeFalsy();

    await page.typeInsideModelDrivenValidationFormInput('c');
    expect(await page.hasRequiredModelError()).toBeFalsy();
    expect(await page.hasMinlengthModelError()).toBeTruthy();
    expect(await page.hasMaxlengthModelError()).toBeFalsy();
    expect(await page.hasPatternModelError()).toBeTruthy();

    await page.typeInsideModelDrivenValidationFormInput('ab');
    expect(await page.hasRequiredModelError()).toBeFalsy();
    expect(await page.hasMinlengthModelError()).toBeTruthy();
    expect(await page.hasMaxlengthModelError()).toBeFalsy();
    expect(await page.hasPatternModelError()).toBeFalsy();

    await page.typeInsideModelDrivenValidationFormInput('aba');
    expect(await page.hasRequiredModelError()).toBeFalsy();
    expect(await page.hasMinlengthModelError()).toBeFalsy();
    expect(await page.hasMaxlengthModelError()).toBeFalsy();
    expect(await page.hasPatternModelError()).toBeFalsy();

    await page.typeInsideModelDrivenValidationFormInput('abc');
    expect(await page.hasRequiredModelError()).toBeFalsy();
    expect(await page.hasMinlengthModelError()).toBeFalsy();
    expect(await page.hasMaxlengthModelError()).toBeFalsy();
    expect(await page.hasPatternModelError()).toBeTruthy();

    await page.typeInsideModelDrivenValidationFormInput('ababababababa');
    expect(await page.hasRequiredModelError()).toBeFalsy();
    expect(await page.hasMinlengthModelError()).toBeFalsy();
    expect(await page.hasMaxlengthModelError()).toBeTruthy();
    expect(await page.hasPatternModelError()).toBeFalsy();

    await page.typeInsideModelDrivenValidationFormInput('ababacbabababa');
    expect(await page.hasRequiredModelError()).toBeFalsy();
    expect(await page.hasMinlengthModelError()).toBeFalsy();
    expect(await page.hasMaxlengthModelError()).toBeTruthy();
    expect(await page.hasPatternModelError()).toBeTruthy();
  });

  it('dovrebbe poter sfruttare la modalità autocomplete del tipo search', async () => {
    await page.clickSearchRadio();
    await page.typeInsideFormInput('p');

    expect(await page.hasRelatedEntries()).toBeTruthy();

    const relatedEntriesElements: ElementFinder[] = await page.getRelatedEntries();
    const chosenEntryText = await relatedEntriesElements[0].getText();

    await relatedEntriesElements[0].click();

    expect(await page.getFormInputValue()).toBe(chosenEntryText);
  });

});
