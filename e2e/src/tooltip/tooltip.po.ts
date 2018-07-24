import { browser, by, element, ExpectedConditions, ElementFinder } from 'protractor';

export class TooltipPage {
  private readonly TOOLTIP_URL = '/componenti/tooltip';
  private readonly ID_EXAMPLE_TAB = 'tooltip-examples-tab';

  private readonly ID_TOOLTIP_PLACEMENT_BUTTON = 'tooltip-placement-button';
  private readonly ID_TOOLTIP_DISPOSE_BUTTON = 'tooltip-dispose-button';

  private readonly ID_EXAMPLE_STANDARD = 'tooltip-example-0';
  private readonly ID_EXAMPLE_TOP = 'tooltip-example-1';
  private readonly ID_EXAMPLE_RIGHT = 'tooltip-example-2';
  private readonly ID_EXAMPLE_LEFT = 'tooltip-example-3';
  private readonly ID_EXAMPLE_BOTTOM = 'tooltip-example-4';
  private readonly ID_EXAMPLE_PLACEMENT = 'tooltip-example-5';
  private readonly ID_EXAMPLE_DISPOSABLE = 'tooltip-example-disposable';

  private readonly ID_TOOLTIP_STANDARD = 'it-tooltip-0';
  private readonly ID_TOOLTIP_TOP = 'it-tooltip-1';
  private readonly ID_TOOLTIP_RIGHT = 'it-tooltip-2';
  private readonly ID_TOOLTIP_LEFT = 'it-tooltip-3';
  private readonly ID_TOOLTIP_BOTTOM = 'it-tooltip-4';
  private readonly ID_TOOLTIP_PLACEMENT = 'it-tooltip-5';
  private readonly ID_TOOLTIP_DISPOSABLE = 'it-tooltip-8';

  async go() {
    await browser.get(this.TOOLTIP_URL);
    await element(by.id(this.ID_EXAMPLE_TAB)).click();
    return await browser.sleep(500);
  }

  private getLabelForAttribute(attr: string) {
    return `[id="${attr}"]`;
  }

  async hover(elementId: string) {
    await browser.actions().mouseMove(element(by.id(elementId))).perform();
  }

  async hoverOverStandardExample() {
    await this.hover(this.ID_EXAMPLE_STANDARD);
  }

  async hoverOverTopExample() {
    await this.hover(this.ID_EXAMPLE_TOP);
  }

  async hoverOverRightExample() {
    await this.hover(this.ID_EXAMPLE_RIGHT);
  }

  async hoverOverBottomExample() {
    await this.hover(this.ID_EXAMPLE_BOTTOM);
  }

  async hoverOverLeftExample() {
    await this.hover(this.ID_EXAMPLE_LEFT);
  }

  async existsStandardExampleTooltip() {
    return await element(by.id(this.ID_TOOLTIP_STANDARD)).isPresent();
  }

  async getStandardExampleTooltipClass() {
    return await element(by.id(this.ID_TOOLTIP_STANDARD)).getAttribute('class');
  }

  async existsTopExampleTooltip() {
    return await element(by.id(this.ID_TOOLTIP_TOP)).isPresent();
  }

  async getTopExampleTooltipClass() {
    return await element(by.id(this.ID_TOOLTIP_TOP)).getAttribute('class');
  }

  async existsRightExampleTooltip() {
    return await element(by.id(this.ID_TOOLTIP_RIGHT)).isPresent();
  }

  async getRightExampleTooltipClass() {
    return await element(by.id(this.ID_TOOLTIP_RIGHT)).getAttribute('class');
  }

  async existsBottomExampleTooltip() {
    return await element(by.id(this.ID_TOOLTIP_BOTTOM)).isPresent();
  }

  async getBottomExampleTooltipClass() {
    return await element(by.id(this.ID_TOOLTIP_BOTTOM)).getAttribute('class');
  }

  async existsLeftExampleTooltip() {
    return await element(by.id(this.ID_TOOLTIP_LEFT)).isPresent();
  }

  async getLeftExampleTooltipClass() {
    return await element(by.id(this.ID_TOOLTIP_LEFT)).getAttribute('class');
  }

  async hoverOverPlacementExample() {
    await this.hover(this.ID_EXAMPLE_PLACEMENT);
  }

  async existsPlacementExampleTooltip() {
    return await element(by.id(this.ID_TOOLTIP_PLACEMENT)).isPresent();
  }

  async getPlacementExampleTooltipClass() {
    return await element(by.id(this.ID_TOOLTIP_PLACEMENT)).getAttribute('class');
  }

  async changeTooltipPlacement() {
    await element(by.id(this.ID_TOOLTIP_PLACEMENT_BUTTON)).click();
  }

  async hoverOverDisposableExample() {
    await this.hover(this.ID_EXAMPLE_DISPOSABLE);
  }

  async hoverOverDisposeButton() {
    await this.hover(this.ID_TOOLTIP_DISPOSE_BUTTON);
  }

  async existsDisposableExampleTooltip() {
    return await element(by.id(this.ID_TOOLTIP_DISPOSABLE)).isPresent();
  }

  async getDisposableExampleTooltipClass() {

    return await element(by.id(this.ID_TOOLTIP_DISPOSABLE)).getAttribute('class');
  }

  async disposeExampleTooltip() {
    await element(by.id(this.ID_TOOLTIP_DISPOSE_BUTTON)).click();
  }

}
