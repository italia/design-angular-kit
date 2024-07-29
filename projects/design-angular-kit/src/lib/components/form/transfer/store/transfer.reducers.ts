import { TransferItem, TransferItemSelection } from '../transfer.model';
import { SelectionState, State } from './transfer.state';

//#region private utility functions
const generateSelectAll = <T>(checked: boolean, items: TransferItem<T>[]) => {
  const selected = new Set<TransferItem<T>>();
  if (checked) {
    items.forEach(item => selected.add(item));
  }

  return selected;
};

const updateSelected = <T>(set: Set<TransferItem<T>>, item: TransferItem<T>) => {
  if (set.has(item)) {
    set.delete(item);
  } else {
    set.add(item);
  }

  return set;
};
//#endregion

//#region reducers
const init = <T>(state: State<T>, { source, target }: SelectionState<T>) => ({
  ...state,
  initialItems: {
    source: [...source],
    target: [...target],
  },
  current: {
    source: [...source],
    target: [...target],
  },
});

const transfer = <T>(state: State<T>) => {
  return {
    ...state,
    current: {
      ...state.current,
      source: state.current.source.filter(i => !state.selections.source.has(i)),
      target: Array.from(new Set([...state.current.target, ...Array.from(state.selections.source)] as TransferItemSelection<T>)),
    },
    selections: {
      ...state.selections,
      source: new Set<TransferItem<T>>(),
    },
    operationsEnabled: {
      ...state.operationsEnabled,
      transfer: false,
      reset: true,
    },
  } satisfies State<T>;
};

const backtransfer = <T>(state: State<T>) => {
  return {
    ...state,
    current: {
      ...state.current,
      target: state.current.target.filter(i => !state.selections.target.has(i)),
      source: Array.from(new Set([...state.current.source, ...Array.from(state.selections.target)] as TransferItemSelection<T>)),
    },
    selections: {
      ...state.selections,
      target: new Set<TransferItem<T>>(),
    },
    operationsEnabled: {
      ...state.operationsEnabled,
      backtransfer: false,
      reset: true,
    },
  } satisfies State<T>;
};

const reset = <T>(state: State<T>) => {
  return {
    ...state,
    current: {
      source: [...state.initialItems.source],
      target: [...state.initialItems.target],
    },
    operationsEnabled: {
      ...state.operationsEnabled,
      reset: false,
    },
  } satisfies State<T>;
};

const selectAllSource = <T>(state: State<T>, { checked }: { checked: boolean }) => {
  const items = state.current.source;
  const selected = generateSelectAll(checked, items);
  const transfer = Boolean(selected.size);

  return {
    ...state,
    selections: {
      ...state.selections,
      source: selected,
    },
    operationsEnabled: {
      ...state.operationsEnabled,
      transfer,
    },
  } satisfies State<T>;
};

const selectAllTarget = <T>(state: State<T>, { checked }: { checked: boolean }) => {
  const items = state.current.target;
  const selected = generateSelectAll(checked, items);
  const backtransfer = Boolean(selected.size);

  return {
    ...state,
    selections: {
      ...state.selections,
      target: selected,
    },
    operationsEnabled: {
      ...state.operationsEnabled,
      backtransfer,
    },
  } satisfies State<T>;
};

const selectionItemSource = <T>(previousState: State<T>, { item }: { item: TransferItem<T> }) => {
  const selected = updateSelected(previousState.selections.source, item);
  const selectedItems = Array.from(selected);
  const transfer = Boolean(selectedItems.length);
  const source = new Set([...selectedItems]);

  const state = {
    ...previousState,
    selections: {
      ...previousState.selections,
      source,
    },
    operationsEnabled: {
      ...previousState.operationsEnabled,
      transfer,
    },
  } satisfies State<T>;

  return state;
};

const selectionItemTarget = <T>(previousState: State<T>, { item }: { item: TransferItem<T> }) => {
  const selected = updateSelected(previousState.selections.target, item);
  const selectedItems = Array.from(selected);
  const backtransfer = Boolean(selectedItems.length);
  const target = new Set([...selectedItems]);

  const state = {
    ...previousState,
    selections: {
      ...previousState.selections,
      target,
    },
    operationsEnabled: {
      ...previousState.operationsEnabled,
      backtransfer,
    },
  } satisfies State<T>;

  return state;
};
//#endregion reducers

//#region public reducers
const initialStateFn = <T>() => ({
  initialItems: {
    source: [],
    target: [],
  },
  current: {
    source: [],
    target: [],
  },
  selections: {
    source: new Set<TransferItem<T>>(),
    target: new Set<TransferItem<T>>(),
  },
  operationsEnabled: {
    transfer: false,
    backtransfer: false,
    reset: false,
  },
});
const initFn =
  <T>(payload: SelectionState<T>) =>
  (state: State<T>) =>
    init(state, payload);

const transferFn =
  <T>() =>
  (state: State<T>) =>
    transfer(state);

const backtransferFn =
  <T>() =>
  (state: State<T>) =>
    backtransfer(state);

const resetFn =
  <T>() =>
  (state: State<T>) =>
    reset(state);

const selectAllSourceFn =
  <T>({ checked }: { checked: boolean }) =>
  (state: State<T>) =>
    selectAllSource(state, { checked }) as State<T>;

const selectAllTargetFn =
  <T>({ checked }: { checked: boolean }) =>
  (state: State<T>) =>
    selectAllTarget(state, { checked }) as State<T>;

const selectionItemSourceFn =
  <T>({ item }: { item: TransferItem<T> }) =>
  (state: State<T>) =>
    selectionItemSource(state, { item }) as State<T>;

const selectionItemTargetFn =
  <T>({ item }: { item: TransferItem<T> }) =>
  (state: State<T>) =>
    selectionItemTarget(state, { item }) as State<T>;
//#endregion

export default {
  initialStateFn,
  initFn,
  transferFn,
  backtransferFn,
  resetFn,
  selectAllSourceFn,
  selectAllTargetFn,
  selectionItemSourceFn,
  selectionItemTargetFn,
};
