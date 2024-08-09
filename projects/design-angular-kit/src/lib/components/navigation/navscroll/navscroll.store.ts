import { BehaviorSubject, distinctUntilChanged, map } from 'rxjs';
import { NavscrollItem, NavscrollItems } from './navscroll.model';

interface NavscrollState {
  items: Set<NavscrollItem>;
  active: Array<NavscrollItem>;
  selected: NavscrollItem;
}

function search(items: Set<NavscrollItem>, item: NavscrollItem) {
  //ricerca
  const nodes = Array.from(items);
  const parent = nodes.find(i => i.childs.includes(item));
  const ancestors = parent?.childs?.length ? search(items, parent) : [];
  return [item, ...ancestors];
}

function flattenNavscrollItems(items: NavscrollItems): NavscrollItems {
  const result: NavscrollItems = [];

  function flatten(items: NavscrollItems): void {
    for (const item of items) {
      result.push(item);
      if (item.childs && item.childs.length > 0) {
        flatten(item.childs);
      }
    }
  }

  flatten(items);
  return result;
}

export class NavscrollStore {
  #state = new BehaviorSubject<NavscrollState>({ items: new Set<NavscrollItem>(), active: [], selected: undefined });

  selected = this.#state.asObservable().pipe(
    map(({ selected }) => selected),
    distinctUntilChanged()
  );

  init(navscrollItems: Array<NavscrollItem>) {
    const flattenItems = flattenNavscrollItems(navscrollItems);
    //the first item is selected by default
    const selected = flattenItems && flattenItems.length && flattenItems[0];

    const state = {
      items: new Set(flattenItems),
      active: [selected],
      selected: selected,
    };

    this.#state.next(state);
  }

  setActive(item: NavscrollItem) {
    const { items } = this.#state.value;

    const active = search(items, item);

    this.#state.next({ items, selected: item, active });
  }

  isActive$(item: NavscrollItem) {
    return this.#state.asObservable().pipe(map(state => state.active.includes(item)));
  }
}
