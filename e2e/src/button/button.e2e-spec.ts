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

  it('dovrebbe poter avere diverse dimensioni', async () => {
    let buttonClasses = await page.getButtonClasses();
    expect(page.isButtonStandardSize()).toBeTruthy();

    await page.clickElement(page.ID_RADIO_XS);
    buttonClasses = await page.getButtonClasses();
    const isXsSize = buttonClasses.indexOf('btn-xs') > -1;
    expect(page.isButtonStandardSize()).toBeFalsy();
    expect(isXsSize).toBeTruthy();

    await page.clickElement(page.ID_RADIO_SM);
    buttonClasses = await page.getButtonClasses();
    const isSmSize = buttonClasses.indexOf('btn-sm') > -1;
    expect(page.isButtonStandardSize()).toBeFalsy();
    expect(isSmSize).toBeTruthy();

    await page.clickElement(page.ID_RADIO_LG);
    buttonClasses = await page.getButtonClasses();
    const isLgSize = buttonClasses.indexOf('btn-lg') > -1;
    expect(page.isButtonStandardSize()).toBeFalsy();
    expect(isLgSize).toBeTruthy();

    await page.clickElement(page.ID_RADIO_STANDARD);
    buttonClasses = await page.getButtonClasses();
    expect(page.isButtonStandardSize()).toBeTruthy();
  });

  it('dovrebbe poter aver un colore diverso e poi avere un colore a contorno', async () => {
    expect(page.isButtonColored()).toBeFalsy();
    expect(page.isButtonOutlined()).toBeFalsy();

    await page.clickElement(page.ID_RADIO_PRIMARY);
    let buttonClasses = await page.getButtonClasses();
    const isPrimaryColored = buttonClasses.indexOf('btn-primary') > -1;
    expect(page.isButtonColored()).toBeTruthy();
    expect(page.isButtonOutlined()).toBeFalsy();
    expect(isPrimaryColored).toBeTruthy();

    await page.clickOutlineCheckbox();
    buttonClasses = await page.getButtonClasses();
    const isPrimaryOutlined = buttonClasses.indexOf('btn-outline-primary') > -1;
    expect(page.isButtonColored()).toBeFalsy();
    expect(page.isButtonOutlined()).toBeTruthy();
    expect(isPrimaryOutlined).toBeTruthy();

    await page.clickElement(page.ID_RADIO_SECONDARY);
    buttonClasses = await page.getButtonClasses();
    const isSecondaryOutlined = buttonClasses.indexOf('btn-outline-secondary') > -1;
    expect(page.isButtonColored()).toBeFalsy();
    expect(page.isButtonOutlined()).toBeTruthy();
    expect(isSecondaryOutlined).toBeTruthy();

    await page.clickOutlineCheckbox();
    await page.clickElement(page.ID_RADIO_NONE);
    expect(page.isButtonColored()).toBeFalsy();
    expect(page.isButtonOutlined()).toBeFalsy();
  });

});
