import { browser } from 'protractor';
import { CheckboxPage } from './checkbox.po';

describe('Checkbox', () => {
  let page: CheckboxPage;

  beforeEach(async() => {
    page = new CheckboxPage();
    await page.go();
  });

  it('dovrebbe iniziare spuntato e abilitato', async () => {
    expect(await page.getRisultatoCheckboxChecked()).toBeTruthy();
    expect(await page.getRisultatoCheckboxDisabled()).toBeFalsy();
  });

  it('dovrebbe interagire con l\'utente', async () => {
    await page.clickRisultatoCheckbox();
    let actual = await page.getRisultatoCheckboxChecked();
    expect(actual).toBeFalsy();
    await page.clickRisultatoCheckbox();
    actual = await page.getRisultatoCheckboxChecked();
    expect(actual).toBeTruthy();
  });

  it('dovrebbe permettere di modificare la spunta', async () => {
    await page.clickSpuntatoCheckbox();
    expect(await page.getRisultatoCheckboxChecked()).toBeFalsy();
    await page.clickSpuntatoCheckbox();
    expect(await page.getRisultatoCheckboxChecked()).toBeTruthy();
  });

  it('dovrebbe permettere di modificare l\'abilitazione', async () => {
    await page.clickDisabilitatoCheckbox();
    expect(await page.getRisultatoCheckboxDisabled()).toBeTruthy();
    await page.clickDisabilitatoCheckbox();
    expect(await page.getRisultatoCheckboxDisabled()).toBeFalsy();
  });

  it('dovrebbe evitare di far modificare la spunta se disabilitato', async () => {
    await page.clickDisabilitatoCheckbox();
    await page.clickRisultatoCheckbox();
    expect(await page.getRisultatoCheckboxChecked()).toBeTruthy();
  });
});
