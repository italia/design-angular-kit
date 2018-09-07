import { CollapsePage } from './collapse.po';

describe('Collapse', () => {
  let page: CollapsePage;

  beforeEach(async() => {
    page = new CollapsePage();
    await page.go();
  });

  it('dovrebbe essere inizialmente non visibile nel DOM', async () => {
    expect(await page.isDiv0Visible()).toBeFalsy();
  });

  it('dovrebbe essere effettuato il toggle quando si clicca il bottone', async () => {
    expect(await page.isDiv0Visible()).toBeFalsy();
    await page.clickButton();
    expect(await page.isDiv0Visible()).toBeTruthy();
    await page.clickButton();
    expect(await page.isDiv0Visible()).toBeFalsy();
  });

  it('gli item del group dovrebbero essere inizialmente chiusi', async () => {
    expect(await page.isItem0Visible()).toBeFalsy();
    expect(await page.isItem1Visible()).toBeFalsy();
    expect(await page.isItem2Visible()).toBeFalsy();
  });

  it('gli item del group non dovrebbero essere mutuamente esclusivi', async () => {
    await page.clickGroup0Button();
    expect(await page.isItem0Visible()).toBeTruthy();
    expect(await page.isItem1Visible()).toBeFalsy();
    expect(await page.isItem2Visible()).toBeFalsy();
    await page.clickGroup1Button();
    expect(await page.isItem0Visible()).toBeTruthy();
    expect(await page.isItem1Visible()).toBeTruthy();
    expect(await page.isItem2Visible()).toBeFalsy();
    await page.clickGroup2Button();
    expect(await page.isItem0Visible()).toBeTruthy();
    expect(await page.isItem1Visible()).toBeTruthy();
    expect(await page.isItem2Visible()).toBeTruthy();
  });

  it('gli item del group dovrebbero essere mutuamente esclusivi', async () => {
    await page.clickCheckbox();
    await page.clickGroup0Button();
    expect(await page.isItem0Visible()).toBeTruthy();
    expect(await page.isItem1Visible()).toBeFalsy();
    expect(await page.isItem2Visible()).toBeFalsy();
    await page.clickGroup1Button();
    expect(await page.isItem0Visible()).toBeFalsy();
    expect(await page.isItem1Visible()).toBeTruthy();
    expect(await page.isItem2Visible()).toBeFalsy();
    await page.clickGroup2Button();
    expect(await page.isItem0Visible()).toBeFalsy();
    expect(await page.isItem1Visible()).toBeFalsy();
    expect(await page.isItem2Visible()).toBeTruthy();
  });
});
