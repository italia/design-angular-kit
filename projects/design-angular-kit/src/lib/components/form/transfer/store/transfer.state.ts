import { TransferItem } from '../transfer.model';

export interface SelectionState<T> {
  source: Array<TransferItem<T>>;
  target: Array<TransferItem<T>>;
}

export interface State<T> {
  initialItems: SelectionState<T>;
  current: SelectionState<T>;
  selections: {
    source: Set<TransferItem<T>>;
    target: Set<TransferItem<T>>;
  };
  operationsEnabled: {
    transfer: boolean;
    backtransfer: boolean;
    reset: boolean;
  };
}
