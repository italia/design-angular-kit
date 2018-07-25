import { RadioPage } from './radio.po';

describe('Radio Group', () => {
  let page: RadioPage;

  beforeEach(async() => {
    page = new RadioPage();
    await page.go();
  });

  it('dovrebbe iniziare con tutti i radio abilitati e Blu selezionato', async () => {
    expect(await page.getRadioRossoChecked()).toBeFalsy();
    expect(await page.getRadioBluChecked()).toBeTruthy();
    expect(await page.getRadioGialloChecked()).toBeFalsy();
    expect(await page.getRadioRossoDisabled()).toBeFalsy();
    expect(await page.getRadioBluDisabled()).toBeFalsy();
    expect(await page.getRadioGialloDisabled()).toBeFalsy();
  });

  it('dovrebbe interagire con l\'utente al cambio di selezione', async () => {
    expect(await page.getRadioRossoChecked()).toBeFalsy();
    expect(await page.getRadioBluChecked()).toBeTruthy();
    expect(await page.getRadioGialloChecked()).toBeFalsy();
    await page.clickRossoRadio();
    expect(await page.getRadioRossoChecked()).toBeTruthy();
    expect(await page.getRadioBluChecked()).toBeFalsy();
    expect(await page.getRadioGialloChecked()).toBeFalsy();
  });

  it('dovrebbe permettere di modificare l\'abilitazione del gruppo', async () => {
    await page.clickDisabilitatoCheckbox();
    expect(await page.getRadioRossoDisabled()).toBeTruthy();
    expect(await page.getRadioBluDisabled()).toBeTruthy();
    expect(await page.getRadioGialloDisabled()).toBeTruthy();
    await page.clickDisabilitatoCheckbox();
    expect(await page.getRadioRossoDisabled()).toBeFalsy();
    expect(await page.getRadioBluDisabled()).toBeFalsy();
    expect(await page.getRadioGialloDisabled()).toBeFalsy();
  });

  it('dovrebbe evitare di far modificare la spunta se disabilitato', async () => {
    await page.clickDisabilitatoCheckbox();
    await page.clickRossoRadio();
    expect(await page.getRadioRossoChecked()).toBeFalsy();
    expect(await page.getRadioBluChecked()).toBeTruthy();
  });
});

describe('Standalone Radio', () => {
  let page: RadioPage;

  beforeEach(async() => {
    page = new RadioPage();
    await page.go();
  });

  it('dovrebbe iniziare con tutti Italia selezionato', async () => {
    expect(await page.getRadioUsaChecked()).toBeFalsy();
    expect(await page.getRadioItaliaChecked()).toBeTruthy();
    expect(await page.getRadioSpagnaChecked()).toBeFalsy();
  });

  it('dovrebbe interagire con l\'utente al cambio di selezione', async () => {
    await page.clickUsaRadio();
    expect(await page.getRadioUsaChecked()).toBeTruthy();
    expect(await page.getRadioItaliaChecked()).toBeFalsy();
    expect(await page.getRadioSpagnaChecked()).toBeFalsy();
  });

});
