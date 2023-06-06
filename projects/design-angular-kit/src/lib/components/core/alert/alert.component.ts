import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { AlertColor } from '../../../interfaces/core';
import { BooleanInput, isTrueBooleanInput } from '../../../utils/boolean-input';
import { AbstractComponent } from '../../../abstracts/abstract.component';
import { Alert } from 'bootstrap-italia';
import { TranslateModule } from '@ngx-translate/core';
import { IconComponent } from '../../utils/icon/icon.component';
import { NgIf } from '@angular/common';

/**
 * Alert
 * @description You can provide feedback to the user via alert messages.
 */
@Component({
  standalone: true,
  selector: 'it-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  exportAs: 'itAlert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf, TranslateModule, IconComponent]
})
export class AlertComponent extends AbstractComponent implements AfterViewInit {

  /**
   * The alert color
   * @default info
   */
  @Input() color: AlertColor = 'info';

  /**
   * Inserts the close button
   * @default false
   */
  @Input() dismissible: BooleanInput | undefined;

  /**
   * This event fires immediately when the instance's close method is called.
   */
  @Output() public closeEvent: EventEmitter<Event> = new EventEmitter();

  /**
   * This event fires when the alert has been closed (it will wait for CSS transitions to complete).
   */
  @Output() public closedEvent: EventEmitter<Event> = new EventEmitter();

  private alert?: Alert;

  @ViewChild('alertElement') private alertElement?: ElementRef<HTMLDivElement>;


  protected get isDismissible(): boolean {
    return isTrueBooleanInput(this.dismissible);
  }

  override ngAfterViewInit() {
    super.ngAfterViewInit();

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
}
