import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ItAbstractComponent } from '../../../abstracts/abstract.component';
import { BackToTop } from 'bootstrap-italia';
import { ItIconComponent } from '../../utils/icon/icon.component';
import { inputToBoolean } from '../../../utils/coercion';

@Component({
  standalone: true,
  selector: 'it-back-to-top',
  templateUrl: './back-to-top.component.html',
  exportAs: 'itBackToTop',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ItIconComponent],
})
export class ItBackToTopComponent extends ItAbstractComponent implements AfterViewInit {
  /**
   * Show small button
   * @default false
   */
  @Input({ transform: inputToBoolean }) small?: boolean;

  /**
   * Show shadow
   * @default false
   */
  @Input({ transform: inputToBoolean }) shadow?: boolean;

  /**
   * Button usable button on a dark background
   * @default false
   */
  @Input({ transform: inputToBoolean }) dark?: boolean;

  private backToTop?: BackToTop;

  @ViewChild('backToTop') private backToTopElement?: ElementRef<HTMLAnchorElement>;

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
