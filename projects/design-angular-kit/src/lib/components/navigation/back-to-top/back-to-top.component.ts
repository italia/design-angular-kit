import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { BooleanInput, isTrueBooleanInput } from '../../../utils/boolean-input';
import { AbstractComponent } from '../../../abstracts/abstract.component';
import { BackToTop } from 'bootstrap-italia';

@Component({
  selector: 'it-back-to-top',
  templateUrl: './back-to-top.component.html',
  exportAs: 'itBackToTop',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackToTopComponent extends AbstractComponent {

  /**
   * The back to top ID
   * @default 'back-to-top-button'
   */
  @Input() override id: string = 'back-to-top-button';

  /**
   * Show small button
   */
  @Input() small?: BooleanInput;

  /**
   * Show shadow
   */
  @Input() shadow?: BooleanInput;

  /**
   * Button usable button on a dark background
   */
  @Input() dark?: BooleanInput;

  private backToTop?: BackToTop;

  @ViewChild('backToTop') private backToTopElement?: ElementRef<HTMLAnchorElement>;

  get isSmall(): boolean {
    return isTrueBooleanInput(this.small);
  }

  get isShadow(): boolean {
    return isTrueBooleanInput(this.shadow);
  }

  get isDark(): boolean {
    return isTrueBooleanInput(this.dark);
  }

  override ngAfterViewInit() {
    super.ngAfterViewInit();

    if (this.backToTopElement) {
      const element = this.backToTopElement.nativeElement;
      this.backToTop = BackToTop.getOrCreateInstance(element);
    }
  }

  /**
   * Show button
   */
  public show(): void {
    this.backToTop?.show();
  }

  /**
   * Hide the button
   */
  public hide(): void {
    this.backToTop?.hide();
  }

  /**
   * Activates the scroll animation towards the Y coordinate indicated by the positionTop option
   */
  public scrollToTop(): void {
    this.backToTop?.scrollToTop();
  }

  /**
   * Eliminate component features
   */
  public dispose(): void {
    this.backToTop?.dispose();
  }
}
