import { AsyncPipe, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, EventEmitter, inject, Input, OnInit, Optional, Output, Self } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControlName, NgControl, NgModel, ReactiveFormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { tap } from 'rxjs';
import { ItAbstractFormComponent } from '../../../abstracts/abstract-form.component';
import { TransferStore } from './store/transfer.store';
import { ItTransferListComponent } from './transfer-list/transfer-list.component';
import { TransferItem } from './transfer.model';

/**
 * Transfer
 * @description Component that allows the creation of checkbox lists.
 */
@Component({
  selector: 'it-transfer',
  standalone: true,
  templateUrl: './transfer.component.html',
  imports: [ItTransferListComponent, NgClass, AsyncPipe, ReactiveFormsModule],
  providers: [TransferStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItTransferComponent<T = any> extends ItAbstractFormComponent<T> implements OnInit {
  /**
   * The select options (left side)
   */
  @Input() options = [];
  /**
   * The selected options (right side)
   */
  @Input() selected = [];
  /**
   * Fired when there is a transfer, a backtransfer or a reset event
   */
  @Output() readonly transferChanges = new EventEmitter<TransferItem<T>[]>();

  /**
   * Enable transfer button
   * @default false
   */
  readonly transferEnabled = this.store.transferEnabled;
  /**
   * Enable backtransfer button
   * @default false
   */
  readonly backtransferEnabled = this.store.backtransferEnabled;
  /**
   * Enable reset button
   * @default false
   */
  readonly resetEnabled = this.store.resetEnabled;

  private readonly destroyRef = inject(DestroyRef);

  constructor(
    @Self()
    @Optional()
    override readonly _ngControl: NgControl,
    override readonly _translateService: TranslateService,
    private readonly store: TransferStore<T>
  ) {
    super(_translateService, _ngControl);
  }

  override ngOnInit() {
    super.ngOnInit();
    this.storeInit();
    this.onStoreValueChanged();
  }

  /**
   * Transfer button click handler
   */
  transferClickHandler(event: MouseEvent) {
    this.buttonEventHandler(event, () => this.store.transfer());
  }
  /**
   * Transfer button keypress handler
   */
  transferKeyPressHandler(event: KeyboardEvent) {
    this.buttonEventHandler(event, () => this.store.transfer());
  }
  /**
   * Backtransfer button click handler
   */
  backtransferClickHandler(event: MouseEvent) {
    this.buttonEventHandler(event, () => this.store.backtransfer());
  }
  /**
   * Backtransfer button keypress handler
   */
  backtransferKeyPressHandler(event: KeyboardEvent) {
    this.buttonEventHandler(event, () => this.store.backtransfer());
  }
  /**
   * Reset button click handler
   */
  resetClickHandler(event: MouseEvent) {
    this.buttonEventHandler(event, () => this.store.reset());
  }
  /**
   * Reset button keypress handler
   */
  resetKeyPressHandler(event: KeyboardEvent) {
    this.buttonEventHandler(event, () => this.store.reset());
  }

  private buttonEventHandler(event: Event, updateStoreCb: () => void) {
    event.preventDefault();
    updateStoreCb();
  }

  private storeInit() {
    let target = [];
    const ngControl = this._ngControl;
    const isNgControlDefined = Boolean(this._ngControl);

    // if ngControl is defined, take values from it. Input() target will be ignored
    if (isNgControlDefined) {
      console.debug('ngControl instanceof NgModel:', ngControl instanceof NgModel);
      console.debug('ngControl instanceof FormControlName:', ngControl instanceof FormControlName);

      // if ngControl is an ngModel (template-driven form use case), take values from it
      if (ngControl instanceof NgModel) {
        console.debug('ngControl instanceof NgModel');
        const model = (ngControl as NgModel).model;
        target = Array.isArray(model) ? model : [];
      }

      // if ngControl is an FormControlName (reactive form use case), take values from it
      if (ngControl instanceof FormControlName) {
        console.debug('ngControl instanceof FormControlName');
        const model = (ngControl as FormControlName).control.value;
        target = Array.isArray(model) ? model : [];
      }

      console.debug('ngControl is defined. Input() target will be ignored');
    } else if (this.selected && Array.isArray(this.selected)) {
      target = [...this.selected];
    }

    console.debug('target:', this.selected, 'formControl:', this.control.value, 'ngModel:', this._ngControl);
    this.store.init({ source: [...this.options], target });
  }

  private onStoreValueChanged() {
    this.store.valueChanged
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        tap(value => this.writeValue(value as T)),
        tap(value => this.onChange(value as T)),
        tap(value => this.transferChanges.emit(value))
      )
      .subscribe();
  }
}
