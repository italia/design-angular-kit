import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, map, of } from 'rxjs';
import { SourceType, TransferItem } from '../transfer.model';
import reducers from './transfer.reducers';
import { SelectionState, State } from './transfer.state';

@Injectable()
export class TransferStore<T> {
  private readonly _state = new BehaviorSubject<State<T>>(reducers.initialStateFn());

  private readonly sourceItems = this._state.pipe(map(state => state.current.source));

  private readonly targetItems = this._state.pipe(map(state => state.current.target));

  private get state() {
    return this._state.value;
  }

  readonly valueChanged = this._state.pipe(
    map(state => state.current.target),
    distinctUntilChanged()
  );

  readonly selectItems = (sourceType: SourceType) => {
    if (sourceType === 'source') {
      return this.sourceItems;
    }

    if (sourceType === 'target') {
      return this.targetItems;
    }

    return of<TransferItem<T>[]>([]);
  };

  readonly selectSelectedItems = (sourceType: SourceType) => {
    if (sourceType === 'source') {
      return this._state.pipe(map(state => state.selections.source));
    }

    if (sourceType === 'target') {
      return this._state.pipe(map(state => state.selections.target));
    }

    return of(new Set<TransferItem<T>>());
  };

  readonly transferEnabled = this._state.pipe(map(state => state.operationsEnabled.transfer));

  readonly backtransferEnabled = this._state.pipe(map(state => state.operationsEnabled.backtransfer));

  readonly resetEnabled = this._state.pipe(map(state => state.operationsEnabled.reset));

  init({ source, target }: SelectionState<T>) {
    this.updateState(reducers.initFn({ source, target }));
  }

  transfer() {
    this.updateState(reducers.transferFn());
  }
  backtransfer() {
    this.updateState(reducers.backtransferFn());
  }

  reset() {
    this.updateState(reducers.resetFn());
  }

  checkboxSelection(item: TransferItem<T>, sourceId: SourceType) {
    if (sourceId === 'source') {
      this.updateState(reducers.selectionItemSourceFn({ item }));
    }

    if (sourceId === 'target') {
      this.updateState(reducers.selectionItemTargetFn({ item }));
    }
  }

  selectAllSelection(checked: boolean, sourceId: SourceType) {
    if (sourceId === 'source') {
      this.updateState(reducers.selectAllSourceFn({ checked }));
    }

    if (sourceId === 'target') {
      this.updateState(reducers.selectAllTargetFn({ checked }));
    }
  }

  private updateState(reducerFn: (state: State<T>) => State<T>) {
    this._state.next(reducerFn(this._state.value));
  }
}
