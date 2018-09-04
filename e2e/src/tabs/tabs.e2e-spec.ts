import { ButtonPage } from './tabs.po';

describe('Button', () => {
  let page: ButtonPage;

  beforeEach(async() => {
    page = new ButtonPage();
    await page.go();
  });

  it('dovrebbe essere visualizzato il primo tab', async () => {
    const firstTabShown = await page.isNthTabContentShown(1);
    const secondTabShown = await page.isNthTabContentShown(2);
    const thirdTabShown = await page.isNthTabContentShown(3);
    const fourthTabShown = await page.isNthTabContentShown(4);

    expect(firstTabShown).toBeTruthy();
    expect(secondTabShown).toBeFalsy();
    expect(thirdTabShown).toBeFalsy();
    expect(fourthTabShown).toBeFalsy();
  });

  it('dovrebbe cambiare il contenuto visualizzato al click su un altro tab', async () => {
    await page.clickNthTab(3);

    const firstTabShown = await page.isNthTabContentShown(1);
    const secondTabShown = await page.isNthTabContentShown(2);
    const thirdTabShown = await page.isNthTabContentShown(3);
    const fourthTabShown = await page.isNthTabContentShown(4);

    expect(firstTabShown).toBeFalsy();
    expect(secondTabShown).toBeFalsy();
    expect(thirdTabShown).toBeTruthy();
    expect(fourthTabShown).toBeFalsy();
  });

  it('non dovrebbe cambiare il contenuto se si clicca su un tab disabilitato', async () => {

    let firstTabShown = await page.isNthTabContentShown(1);
    let fourthTabShown = await page.isNthTabContentShown(4);

    expect(firstTabShown).toBeTruthy();
    expect(fourthTabShown).toBeFalsy();

    await page.clickDisabledCheckbox();
    await page.clickNthTab(4);

    firstTabShown = await page.isNthTabContentShown(1);
    fourthTabShown = await page.isNthTabContentShown(4);

    expect(firstTabShown).toBeTruthy();
    expect(fourthTabShown).toBeFalsy();
  });

  it('dovrebbe selezionare un nuovo tab aggiunto solo se specificato esplicitamente', async () => {
    expect(page.getDynamicTabGroupNumberOfTabs()).toBe(3);

    let firstTabShown = await page.isNthDynamicTabContentShown(1);

    expect(firstTabShown).toBeTruthy();

    // faccio click per aggiungere un tab senza che questo venga selezionato
    await page.clickAddButton();

    expect(page.getDynamicTabGroupNumberOfTabs()).toBe(4);

    firstTabShown = await page.isNthDynamicTabContentShown(1);
    let fourthTabShown = await page.isNthDynamicTabContentShown(4);

    expect(firstTabShown).toBeTruthy();
    expect(fourthTabShown).toBeFalsy();

    // faccio click per aggiungere un tab e selezionarlo
    await page.clickSelectAfterAddingCheckbox();
    await page.clickAddButton();

    expect(page.getDynamicTabGroupNumberOfTabs()).toBe(5);

    fourthTabShown = await page.isNthDynamicTabContentShown(4);
    const fifthTabShown = await page.isNthDynamicTabContentShown(5);

    expect(fourthTabShown).toBeFalsy();
    expect(fifthTabShown).toBeTruthy();
  });

  it('dovrebbe cancellare correttamente un tab e selezionare quello successivo se presente, altrimenti quello precedente', async () => {
    expect(page.getDynamicTabGroupNumberOfTabs()).toBe(3);

    await page.clickNthDynamicTab(2);
    await page.clickNthDynamicTabRemoveButton(2);

    expect(page.getDynamicTabGroupNumberOfTabs()).toBe(2);

    const secondTabShown = await page.isNthDynamicTabContentShown(2);

    expect(secondTabShown).toBeTruthy();

    await page.clickNthDynamicTab(2);
    await page.clickNthDynamicTabRemoveButton(2);

    expect(page.getDynamicTabGroupNumberOfTabs()).toBe(1);

    const firstTabShown = await page.isNthDynamicTabContentShown(1);

    expect(firstTabShown).toBeTruthy();
  });

});
