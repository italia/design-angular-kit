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
  @Input()
  source = [];

  @Input()
  target = [];

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

  transferClickHandler() {
    this.transfer();
  }

  transferKeyHandler() {
    this.transfer();
  }

  backtransferClickHandler() {
    this.backtransfer();
  }

  backtransferKeyHandler() {
    this.backtransfer();
  }

  resetClickHandler() {
    this.reset();
  }
  resetKeyHandler() {
    this.reset();
  }

  private transfer() {
    this.store.transfer();
  }

  private backtransfer() {
    this.store.backtransfer();
    // const selectedItemsSet = this.targetSelectedItems; //new Set(this.targetSelectedItems.map(i => i.value));
    // this.targetItems = this.targetItems.filter(i => !selectedItemsSet.has(i));
    // const sourceItems = [
    //   ...(Array.from(this.targetSelectedItems) as TransferItemSelection<T>),
    //   ...(this.sourceItems as TransferItemSelection<T>),
    // ] as TransferItemSelection<T>;
    // this.sourceItems = Array.from(new Set(sourceItems));
    // this.targetSelectedItems.clear();
    // this.resetEnabled = true;
    // this.backtransferEnabled = false;
  }

  private reset() {
    this.store.reset();
  }
}
