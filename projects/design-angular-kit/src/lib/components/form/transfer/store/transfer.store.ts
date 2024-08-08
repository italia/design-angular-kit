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

  checkboxSelection(item: TransferItem<T>, sourceType: SourceType) {
    if (sourceType === 'source') {
      this.updateState(reducers.selectionItemSourceFn({ item }));
    }

    if (sourceType === 'target') {
      this.updateState(reducers.selectionItemTargetFn({ item }));
    }
  }

  selectAllSelection(checked: boolean, sourceType: SourceType) {
    if (sourceType === 'source') {
      this.updateState(reducers.selectAllSourceFn({ checked }));
    }

    if (sourceType === 'target') {
      this.updateState(reducers.selectAllTargetFn({ checked }));
    }
  }

  private updateState(reducerFn: (state: State<T>) => State<T>) {
    this._state.next(reducerFn(this._state.value));
  }
}
