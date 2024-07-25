import { AsyncPipe, JsonPipe, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, Input, OnInit, Optional, Self } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgControl, ReactiveFormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { tap } from 'rxjs';
import { ItAbstractFormComponent } from '../../../abstracts/abstract-form.component';
import { TransferStore } from './store/transfer.store';
import { ItTransferListComponent } from './transfer-list/transfer-list.component';

/**
 * Transfer
 * @description Component that allows the creation of checkbox lists.
 */
@Component({
  selector: 'it-transfer',
  standalone: true,
  templateUrl: './transfer.component.html',
  imports: [ItTransferListComponent, NgClass, AsyncPipe, ReactiveFormsModule, JsonPipe],
  providers: [TransferStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItTransferComponent<T = any> extends ItAbstractFormComponent<T> implements OnInit {
  /**
   * The source options (left side)
   */
  @Input() source = [];
  /**
   * The target options (right side)
   */
  @Input() target = [];

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
    readonly _ngControl: NgControl,
    readonly _translateService: TranslateService,
    private readonly store: TransferStore<T>
  ) {
    super(_translateService, _ngControl);
  }

  override ngOnInit() {
    super.ngOnInit();
    this.store.init({ source: [...this.source], target: [...this.target] });
    this.store.valueChanged
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        tap(value => this.writeValue(value as T)),
        tap(value => this.onChange(value as T))
      )
      .subscribe();
  }

  /**
   * Transfer button click handler
   */
  transferClickHandler() {
    this.transfer();
  }
  /**
   * Transfer button keypress handler
   */
  transferKeyHandler() {
    this.transfer();
  }
  /**
   * Backtransfer button click handler
   */
  backtransferClickHandler() {
    this.backtransfer();
  }
  /**
   * Backtransfer button keypress handler
   */
  backtransferKeyHandler() {
    this.backtransfer();
  }
  /**
   * Reset button click handler
   */
  resetClickHandler() {
    this.reset();
  }
  /**
   * Reset button keypress handler
   */
  resetKeyHandler() {
    this.reset();
  }

  private transfer() {
    this.store.transfer();
  }

  private backtransfer() {
    this.store.backtransfer();
  }

  private reset() {
    this.store.reset();
  }
}
