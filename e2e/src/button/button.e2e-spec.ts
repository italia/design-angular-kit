import { browser } from 'protractor';
import { ButtonPage } from './button.po';

const BUTTON_TEXT = 'Numero click eseguiti: ';
describe('Button', () => {
  let page: ButtonPage;

  beforeEach(async() => {
    page = new ButtonPage();
    await page.go();
  });

  it('dovrebbe poter essere cliccato', async () => {
    let actualValue = await page.getButtonText();
    expect(actualValue).toBe(BUTTON_TEXT + 0);

    await page.clickButton();

    actualValue = await page.getButtonText();
    expect(actualValue).toBe(BUTTON_TEXT + 1);
  });

  it('dovrebbe poter essere disabilitato', async () => {
    let actualValue = await page.getButtonText();
    let buttonClasses = await page.getButtonClasses();
    let isDisabled = buttonClasses.indexOf('disabled') > -1;
    expect(actualValue).toBe(BUTTON_TEXT + 0);
    expect(isDisabled).toBeFalsy();

    await page.clickDisabledCheckbox();
    await page.clickButton();

    actualValue = await page.getButtonText();
    buttonClasses = await page.getButtonClasses();
    isDisabled = buttonClasses.indexOf('disabled') > -1;
    expect(actualValue).toBe(BUTTON_TEXT + 0);
    expect(isDisabled).toBeTruthy();
  });

  it('dovrebbe poter essere un elemento a blocco', async () => {
    let actualValue = await page.getButtonText();
    let buttonClasses = await page.getButtonClasses();
    let isDisabled = buttonClasses.indexOf('btn-block') > -1;
    expect(actualValue).toBe(BUTTON_TEXT + 0);
    expect(isDisabled).toBeFalsy();

    await page.clickBlockCheckbox();
    await page.clickButton();

    actualValue = await page.getButtonText();
    buttonClasses = await page.getButtonClasses();
    isDisabled = buttonClasses.indexOf('btn-block') > -1;
    expect(actualValue).toBe(BUTTON_TEXT + 1);
    expect(isDisabled).toBeTruthy();
  });

  /* it('dovrebbe poter aver un colore diverso e poi avere un colore a contorno', async () => {
      
  }); */

});
