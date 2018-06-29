import { browser } from 'protractor';
import { TogglePage } from './toggle.po';

describe('Toggle', () => {
  let page: TogglePage;

  beforeEach(async() => {
    page = new TogglePage();
    await page.go();
  });

  it('dovrebbe iniziare spuntato e abilitato', async () => {
    expect(await page.getRisultatoToggleChecked()).toBeTruthy();
    expect(await page.getRisultatoToggleDisabled()).toBeFalsy();
  });

  it('dovrebbe interagire con l\'utente', async () => {
    await page.clickRisultatoToggle();
    let actual = await page.getRisultatoToggleChecked();
    expect(actual).toBeFalsy();
    await page.clickRisultatoToggle();
    actual = await page.getRisultatoToggleChecked();
    expect(actual).toBeTruthy();
  });

  it('dovrebbe permettere di modificare la spunta', async () => {
    await page.clickSpuntatoToggle();
    expect(await page.getRisultatoToggleChecked()).toBeFalsy();
    await page.clickSpuntatoToggle();
    expect(await page.getRisultatoToggleChecked()).toBeTruthy();
  });

  it('dovrebbe permettere di modificare l\'abilitazione', async () => {
    await page.clickDisabilitatoToggle();
    expect(await page.getRisultatoToggleDisabled()).toBeTruthy();
    await page.clickDisabilitatoToggle();
    expect(await page.getRisultatoToggleDisabled()).toBeFalsy();
  });

  it('dovrebbe evitare di far modificare la spunta se disabilitato', async () => {
    await page.clickDisabilitatoToggle();
    await page.clickRisultatoToggle();
    expect(await page.getRisultatoToggleChecked()).toBeTruthy();
  });
});
