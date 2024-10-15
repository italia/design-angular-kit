import { BehaviorSubject, distinctUntilChanged, map, Subject } from 'rxjs';
import { NavscrollItem } from './navscroll.model';
import { flattenNavscrollItems, search } from './navscroll.utils';

interface NavscrollState {
  items: Set<NavscrollItem>;
  active: Array<NavscrollItem>;
  selected?: NavscrollItem;
  progressBar: number;
  isMobile: boolean;
}

export class NavscrollStore {
  readonly #state = new BehaviorSubject<NavscrollState>({
    items: new Set<NavscrollItem>(),
    active: [],
    selected: undefined,
    progressBar: 0,
    isMobile: false,
  });

  readonly #state$ = this.#state.asObservable();

  readonly selected = this.#state$.pipe(
    map(({ selected }) => selected),
    distinctUntilChanged()
  );

  readonly progressBar = this.#state$.pipe(
    map(({ progressBar }) => progressBar),
    distinctUntilChanged()
  );

  readonly isMobile = this.#state$.pipe(
    map(({ isMobile }) => isMobile),
    distinctUntilChanged()
  );

  readonly #menuItemSelected = new Subject();

  readonly menuItemSelected = this.#menuItemSelected.asObservable();

  init(navscrollItems: Array<NavscrollItem>) {
    const flattenItems = flattenNavscrollItems(navscrollItems);
    //the first item is selected by default
    const selected = ((flattenItems && flattenItems.length && flattenItems[0]) as NavscrollItem) ?? undefined;

    const state = {
      items: new Set(flattenItems),
      active: selected ? [selected] : [],
      selected: selected,
      progressBar: 0,
      isMobile: false,
    };

    this.#state.next(state);
  }

  setActive(item: NavscrollItem) {
    const { items } = this.#state.value;

    const active = search(items, item);
    const state = this.#state.value;
    this.#state.next({ ...state, items, selected: item, active });
  }

  isActive$(item: NavscrollItem) {
    return this.#state.asObservable().pipe(map(state => state.active.includes(item)));
  }

  updateProgressBar(container: HTMLElement) {
    if (!container) {
      return;
    }
    const offset = Math.abs(container.getBoundingClientRect().top);
    const height = container.getBoundingClientRect().height;
    const scrollAmount = (offset / height) * 100;
    const scrollValue = Math.min(100, Math.max(0, scrollAmount));
    const state = this.#state.value;
    this.#state.next({ ...state, progressBar: scrollValue });
  }

  selectMenuItem() {
    this.#menuItemSelected.next(undefined);
  }

  setMobile({ innerWidth }: { innerWidth: number }) {
    const isLessThan992px = innerWidth < 992;
    const isMobile = isLessThan992px;
    const state = this.#state.value;
    this.#state.next({ ...state, isMobile });
  }
}
