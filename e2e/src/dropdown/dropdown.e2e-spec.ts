import { browser } from 'protractor';
import { DropdownPage } from './dropdown.po';
import { appendNgContent } from '@angular/core/src/view/ng_content';

describe('Dropdown', () => {
  let page: DropdownPage;

  beforeEach(async() => {
    page = new DropdownPage();
    await page.go();
  });

  it('dovrebbe passare da sfondo chiaro a scuro', async () => {
    let isDropdownDark = await page.isDropdownDark();
    expect(isDropdownDark).toBeFalsy();

    await page.clickDarkBackgroundRadio();
    await page.clickDropdownButton();

    isDropdownDark = await page.isDropdownDark();
    expect(isDropdownDark).toBeTruthy();
  });

  it('dovrebbe passare da disposizione standard/verticale a fullwidth/orizzontale', async () => {
    let isDropdownFullWidth = await page.isDropdownFullWidth();
    expect(isDropdownFullWidth).toBeFalsy();

    await page.clickFullWidthRadio();
    await page.clickDropdownButton();

    isDropdownFullWidth = await page.isDropdownFullWidth();
    expect(isDropdownFullWidth).toBeTruthy();
  });

  it('dovrebbe cambiare il colore del bottone di apertura/chiusura', async () => {
    let dropdownButtonClasses = await page.getDropdownButtonClasses();
    const isDropdownDefaultColor = await dropdownButtonClasses.indexOf(page.DROPDOWN_BUTTON_DEFAULT_CLASS) > -1;
    expect(isDropdownDefaultColor).toBeTruthy();

    await page.clickPrimaryColorRadio();

    dropdownButtonClasses = await page.getDropdownButtonClasses();
    const isDropdownPrimaryColor = await dropdownButtonClasses.indexOf(page.DROPDOWN_BUTTON_PRIMARY_CLASS) > -1;
    expect(isDropdownPrimaryColor).toBeTruthy();

    await page.clickSecondaryColorRadio();

    dropdownButtonClasses = await page.getDropdownButtonClasses();
    const isDropdownSecondaryColor = await dropdownButtonClasses.indexOf(page.DROPDOWN_BUTTON_SECONDARY_CLASS) > -1;
    expect(isDropdownSecondaryColor).toBeTruthy();
  });

  it('dovrebbe cambiare il testo del bottone di apertura/chiusura', async () => {
    let dropdownButtonText = await page.getDropdownButtonText();
    expect(dropdownButtonText).toBe(page.DROPDOWN_BUTTON_CLICK_TEXT);

    await page.clickCheckRadio();

    dropdownButtonText = await page.getDropdownButtonText();
    expect(dropdownButtonText).toBe(page.DROPDOWN_BUTTON_CHECK_TEXT);

    await page.clickHelloRadio();

    dropdownButtonText = await page.getDropdownButtonText();
    expect(dropdownButtonText).toBe(page.DROPDOWN_BUTTON_HELLO_TEXT);
  });


  it('dovrebbe impostare un item della dropdown come attivo', async () => {
    let dropdownItemClasses = await page.getDropdownItemClasses();
    const hasListItemClass = dropdownItemClasses.indexOf(page.ITEM_DEFAULT_CLASS) > -1;
    expect(hasListItemClass).toBeTruthy();

    await page.clickActiveItemCheckbox();

    dropdownItemClasses = await page.getDropdownItemClasses();
    const hasActiveClass = dropdownItemClasses.indexOf(page.ITEM_ACTIVE_CLASS) > -1;
    expect(hasActiveClass).toBeTruthy();
  });

  it('dovrebbe impostare un item della dropdown come disabilitato', async () => {
    let dropdownItemClasses = await page.getDropdownItemClasses();
    const hasListItemClass = dropdownItemClasses.indexOf(page.ITEM_DEFAULT_CLASS) > -1;
    expect(hasListItemClass).toBeTruthy();

    await page.clickDisabledItemCheckbox();

    dropdownItemClasses = await page.getDropdownItemClasses();
    const hasDisableClass = dropdownItemClasses.indexOf(page.ITEM_DISABLED_CLASS) > -1;
    expect(hasDisableClass).toBeTruthy();
  });

  it('dovrebbe impostare un item della dropdown con testo ingrandito', async () => {
    let dropdownItemClasses = await page.getDropdownItemClasses();
    let hasLargeClass = dropdownItemClasses.indexOf(page.ITEM_LARGE_CLASS) > -1;
    expect(hasLargeClass).toBeTruthy();

    await page.clickLargeItemCheckbox();

    dropdownItemClasses = await page.getDropdownItemClasses();
    hasLargeClass = dropdownItemClasses.indexOf(page.ITEM_LARGE_CLASS) > -1;
    expect(hasLargeClass).toBeFalsy();

    await page.clickLargeItemCheckbox();

    dropdownItemClasses = await page.getDropdownItemClasses();
    hasLargeClass = dropdownItemClasses.indexOf(page.ITEM_LARGE_CLASS) > -1;
    expect(hasLargeClass).toBeTruthy();
  });

  it('dovrebbe impostare la icona di un item della dropdown', async () => {
    await page.clickNullIconItemRadio();
    let isIconSectionPresent = await page.isIconSectionPresent();
    expect(isIconSectionPresent).toBeFalsy();

    await page.clickFavoriteIconItemRadio();

    isIconSectionPresent = await page.isIconSectionPresent();
    let dropdownItemIconClasses = await page.getDropdownItemIconClasses();
    const hasFavoriteIcon = dropdownItemIconClasses.indexOf(page.FAVORITE_ICON_CLASS) > -1;
    expect(isIconSectionPresent).toBeTruthy();
    expect(hasFavoriteIcon).toBeTruthy();

    await page.clickLinkIconItemRadio();

    isIconSectionPresent = await page.isIconSectionPresent();
    dropdownItemIconClasses = await page.getDropdownItemIconClasses();
    const hasLinkIcon = dropdownItemIconClasses.indexOf(page.LINK_ICON_CLASS) > -1;
    expect(isIconSectionPresent).toBeTruthy();
    expect(hasLinkIcon).toBeTruthy();
  });

  it('dovrebbe impostare la posizione della icona di un item della dropdown', async () => {
    await page.clickFavoriteIconItemRadio();

    await page.clickIconLeftPosition();
    let dropdownItemClasses = await page.getDropdownItemClasses();
    let dropdownItemIconClasses = await page.getDropdownItemIconClasses();
    let hasLeftPosition =
      dropdownItemClasses.indexOf(page.DROPDOWN_ITEM_LEFT_ICON_CLASS) > -1 &&
      dropdownItemIconClasses.indexOf(page.ICON_LEFT_PLACEMENT_CLASS) > -1;
    let hasRightPosition =
      dropdownItemClasses.indexOf(page.DROPDOWN_ITEM_RIGHT_ICON_CLASS) > -1 &&
      dropdownItemIconClasses.indexOf(page.ICON_RIGHT_PLACEMENT_CLASS) > -1;
    expect(hasLeftPosition).toBeTruthy();
    expect(hasRightPosition).toBeFalsy();

    await page.clickIconRightPosition();
    dropdownItemClasses = await page.getDropdownItemClasses();
    dropdownItemIconClasses = await page.getDropdownItemIconClasses();
    hasLeftPosition =
      dropdownItemClasses.indexOf(page.DROPDOWN_ITEM_LEFT_ICON_CLASS) > -1 &&
      dropdownItemIconClasses.indexOf(page.ICON_LEFT_PLACEMENT_CLASS) > -1;
    hasRightPosition =
      dropdownItemClasses.indexOf(page.DROPDOWN_ITEM_RIGHT_ICON_CLASS) > -1 &&
      dropdownItemIconClasses.indexOf(page.ICON_RIGHT_PLACEMENT_CLASS) > -1;
    expect(hasLeftPosition).toBeFalsy();
    expect(hasRightPosition).toBeTruthy();
  });
});
