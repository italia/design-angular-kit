import { AsyncPipe, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
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
  imports: [ItTransferListComponent, NgClass, AsyncPipe],
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

  readonly transferEnabled = this.store.transferEnabled;

  readonly backtransferEnabled = this.store.backtransferEnabled;

  readonly resetEnabled = this.store.resetEnabled;

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
