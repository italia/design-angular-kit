import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  signal,
  ViewChild,
} from '@angular/core';
import { AlertColor } from '../../../interfaces/core';
import { ItAbstractComponent } from '../../../abstracts/abstract.component';
import { Alert } from 'bootstrap-italia';
import { TranslateModule } from '@ngx-translate/core';
import { ItIconComponent } from '../../utils/icon/icon.component';
import { inputToBoolean } from '../../../utils/coercion';

/**
 * Alert
 * @description You can provide feedback to the user via alert messages.
 */
@Component({
  selector: 'it-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  exportAs: 'itAlert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateModule, ItIconComponent],
})
export class ItAlertComponent extends ItAbstractComponent implements AfterViewInit {
  /**
   * The alert color
   * @default info
   */
  @Input() color: AlertColor = 'info';

  /**
   * Inserts the close button
   * @default false
   */
  @Input({ transform: inputToBoolean }) dismissible?: boolean;

  /**
   * This event fires immediately when the instance's close method is called.
   */
  @Output() public closeEvent: EventEmitter<Event> = new EventEmitter();

  /**
   * This event fires when the alert has been closed (it will wait for CSS transitions to complete).
   */
  @Output() public closedEvent: EventEmitter<Event> = new EventEmitter();

  /**
   * Whether the heading slot has projected content.
   * Drives the [class.d-none] and [attr.aria-hidden] bindings on the `<h4>`.
   */
  readonly hasHeading = signal(false);

  private alert?: Alert;

  @ViewChild('alertElement') private alertElement?: ElementRef<HTMLDivElement>;
  @ViewChild('headingEl') private headingEl?: ElementRef<HTMLHeadingElement>;

  override ngAfterViewInit() {
    super.ngAfterViewInit();
    this._detectHeadingContent();

    if (this.alertElement) {
      const element = this.alertElement.nativeElement;
      this.alert = Alert.getOrCreateInstance(element);

      element.addEventListener('close.bs.alert', event => this.closeEvent.emit(event));
      element.addEventListener('closed.bs.alert', event => this.closedEvent.emit(event));
    }
  }

  /**
   * Close an alert by removing it from the DOM.
   * If the `.fade` and `.show` classes are present in the element, the alert will be closed with a disappearing effect.
   */
  public close(): void {
    this.alert?.close();
  }

  /**
   * The alert is removed
   */
  public dispose(): void {
    this.alert?.dispose();
  }

  /**
   * Checks whether the heading `<ng-content>` slot received real projected content.
   * Ignores Angular comment nodes and whitespace-only text nodes.
   */
  private _detectHeadingContent(): void {
    const el = this.headingEl?.nativeElement;
    if (!el) {
      return;
    }
    const hasContent = Array.from(el.childNodes).some(
      node => node.nodeType === Node.ELEMENT_NODE || (node.nodeType === Node.TEXT_NODE && (node.textContent?.trim() ?? '') !== '')
    );
    this.hasHeading.set(hasContent);
  }
}
