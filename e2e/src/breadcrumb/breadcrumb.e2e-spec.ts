import { ElementFinder } from 'protractor';
import { BreadcrumbPage } from './breadcrumb.po';

describe('Breadcrumb', () => {
  let page: BreadcrumbPage;

  beforeEach(async() => {
    page = new BreadcrumbPage();
    await page.go();
  });

  it('dovrebbe iniziare con uno sfondo scuro per poi essere cambiato ad uno chiaro', async () => {
    expect(await page.hasDarkBackground()).toBeTruthy();

    await page.clickBackgroundCheckbox();

    expect(await page.hasDarkBackground()).toBeFalsy();

    await page.clickBackgroundCheckbox();

    expect(await page.hasDarkBackground()).toBeTruthy();
  });

  it('dovrebbe avere un ultimo elemento con relative classe active', async () => {
    const breadcrumbItems: ElementFinder[] = await page.getBreadcrumbItems();
    expect(breadcrumbItems.length).toBe(3);

    let lastItem: ElementFinder;
    breadcrumbItems.forEach(async(item, i, array) => {
      const isLastItem = page.isLastItem(item);
      if (i === array.length - 1) {
        expect(isLastItem).toBeTruthy();
      } else {
        expect(isLastItem).toBeFalsy();
      }
    });

    lastItem = breadcrumbItems[breadcrumbItems.length - 1];

    page.clickAddButton();

    let isLast = page.isLastItem(lastItem);
    expect(isLast).toBeFalsy();

    page.clickRemoveButton();

    isLast = page.isLastItem(lastItem);
    expect(isLast).toBeTruthy();
  });

  it('dovrebbe poter cambiare il separatore per tutti i suoi elementi', async () => {
    const breadcrumbItems: ElementFinder[] = await page.getBreadcrumbItems();
    const breadcrumbItemsSeparators: ElementFinder[] = await page.getBreadcrumbItemsSeparator();
    expect(breadcrumbItemsSeparators.length).toBe(breadcrumbItems.length - 1);

    const SLASH_SEPARATOR = '/';
    breadcrumbItemsSeparators.forEach(item => {
      expect(item.getText()).toBe(SLASH_SEPARATOR);
    });

    page.clickGthanSeparator();

    const GTHAN_SEPARATOR = '>';
    breadcrumbItemsSeparators.forEach(item => {
      expect(item.getText()).toBe(GTHAN_SEPARATOR);
    });

    page.clickTildeSeparator();

    const TILDE_SEPARATOR = '~';
    breadcrumbItemsSeparators.forEach(item => {
      expect(item.getText()).toBe(TILDE_SEPARATOR);
    });
  });

  it('dovrebbe poter cambiare l\'icona per tutti i suoi elementi', async () => {
    const breadcrumbItemsIcons: ElementFinder[] = await page.getBreadcrumbItemsIcon();

    const FAVORITE_ICON = 'it-favorite';
    breadcrumbItemsIcons.forEach(item => {
      expect(item.getAttribute('class')).toBe(FAVORITE_ICON);
    });

    page.clickFacebookIcon();

    const FACEBOOK_ICON = 'it-facebook';
    breadcrumbItemsIcons.forEach(item => {
      expect(item.getAttribute('class')).toBe(FACEBOOK_ICON);
    });

    page.clickFlickrIcon();

    const FLICKR_ICON = 'it-flickr';
    breadcrumbItemsIcons.forEach(item => {
      expect(item.getAttribute('class')).toBe(FLICKR_ICON);
    });
  });

});
