import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ItAbstractFormComponent } from '../../../abstracts/abstract-form.component';
import { ItTransferListComponent } from './transfer-list/transfer-list.component';
import { NgClass } from '@angular/common';

//Qs
//Aria hidden?
//state management with service?
//interface?

export interface TransferItem<ValueType> {
  text: string;
  value: ValueType;
}

type TransferItemSelection<ValueType> = Array<TransferItem<ValueType>>;

/**
 * Transfer
 * @description Component that allows the creation of checkbox lists.
 */
@Component({
  selector: 'it-transfer',
  standalone: true,
  templateUrl: './transfer.component.html',
  imports: [ItTransferListComponent, NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItTransferComponent<T = any> extends ItAbstractFormComponent<T> implements OnInit {
  readonly title = 'transfer';

  @Input()
  source = [];

  @Input()
  target = [];

  sourceItems: TransferItem<T>[];

  targetItems: TransferItem<T>[];

  transferEnabled = false;

  backtransferEnabled = false;

  resetEnabled = false;

  private sourceSelectedItems: TransferItem<T>[];

  private targetSelectedItems: TransferItem<T>[];

  override ngOnInit() {
    super.ngOnInit();

    this.sourceItems = [...this.source];
    this.targetItems = [...this.target];
  }

  sourceSelectionChangeHandler(selectedItems: TransferItem<T>[]) {
    console.log(selectedItems);
    this.transferEnabled = Boolean(selectedItems.length);
    this.sourceSelectedItems = [...selectedItems];
  }
  targetSelectionChangeHandler(selectedItems: TransferItem<T>[]) {
    console.log(selectedItems);
    this.backtransferEnabled = Boolean(selectedItems.length);
    this.targetSelectedItems = [...selectedItems];
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
    const selectedItemsSet = new Set(this.sourceSelectedItems.map(i => i.value));
    this.sourceItems = this.sourceItems.filter(i => !selectedItemsSet.has(i.value));
    this.targetItems = [
      ...(this.sourceSelectedItems as TransferItemSelection<T>),
      ...(this.targetItems as TransferItemSelection<T>),
    ] as TransferItemSelection<T>;

    this.resetEnabled = true;
    this.transferEnabled = false;
  }

  private backtransfer() {
    const selectedItemsSet = new Set(this.targetSelectedItems.map(i => i.value));
    this.targetItems = this.targetItems.filter(i => !selectedItemsSet.has(i.value));
    this.sourceItems = [
      ...(this.targetSelectedItems as TransferItemSelection<T>),
      ...(this.sourceItems as TransferItemSelection<T>),
    ] as TransferItemSelection<T>;

    this.resetEnabled = true;
    this.backtransferEnabled = false;
  }

  private reset() {
    this.sourceItems = [...this.source];
    this.targetItems = [...this.target];

    this.resetEnabled = false;
  }
}
