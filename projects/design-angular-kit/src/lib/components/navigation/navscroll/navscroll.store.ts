import { BehaviorSubject, map } from 'rxjs';
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

export function flattenNavscrollItems(items: NavscrollItems): NavscrollItems {
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

  get state() {
    return this.#state.value;
  }

  init(navscrollItems: Array<NavscrollItem>) {
    const flattenItems = flattenNavscrollItems(navscrollItems);
    const active = flattenItems && flattenItems.length && flattenItems[0];
    console.log(active);
    const state = {
      items: new Set(flattenItems),
      active: [active],
      selected: active,
    };

    this.#state.next(state);
  }

  setActive(item: NavscrollItem) {
    console.log('setActive');
    const { items } = this.#state.value;

    const active = search(items, item);

    this.#state.next({ items, selected: item, active });
  }

  isActive(item: NavscrollItem) {
    return this.state.active.includes(item);
  }

  isActive$(item: NavscrollItem) {
    return this.#state.asObservable().pipe(map(state => state.active.includes(item)));
  }
}
