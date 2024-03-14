import {
  Directive,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  Optional,
  Output,
  booleanAttribute,
  HostBinding,
} from '@angular/core';
import { Subject } from 'rxjs';
import {
  IT_SORT_DEFAULT_OPTIONS,
  ItSortable,
  ItSortDefaultOptions,
  ItSortEvent,
  SortDirection,
} from '../../../../interfaces/sortable-table';

@Directive({
  standalone: true,
  selector: '[itSort]',
  exportAs: 'itSort',
})
export class ItSortDirective implements OnChanges, OnDestroy {
  /** The id of the most recently sorted ItSortable. */
  @Input('itSortActive') active?: string;

  /**
   * The direction to set when an MatSortable is initially sorted.
   * May be overridden by the MatSortable's sort start.
   */
  @Input('itSortStart') start: SortDirection = 'asc';

  /** The sort direction of the currently active ItSortable. */
  @Input('itSortDirection')
  get direction(): SortDirection {
    return this._direction;
  }
  set direction(direction: SortDirection) {
    this._direction = direction;
  }
  private _direction: SortDirection;

  /**
   * Whether to disable the user from clearing the sort by finishing the sort direction cycle.
   * May be overridden by the ItSortable's disable clear input.
   */
  @Input({ transform: booleanAttribute })
  disableSortClear?: boolean;

  /** Whether the sortable is disabled. */
  @Input({ transform: booleanAttribute })
  sortDisabled: boolean = false;

  /** Event emitted when the user changes either the active sort or sort direction. */
  @Output() readonly sortChange: EventEmitter<ItSortEvent> = new EventEmitter<ItSortEvent>();

  @HostBinding('class')
  public readonly sortDirectiveClass = 'it-sort';

  /** Collection of all registered sortables that this directive manages. */
  protected sortables = new Map<string, ItSortable>();

  /** Used to notify any child components listening to state changes. */
  readonly _stateChanges = new Subject<void>();

  constructor(
    @Optional()
    @Inject(IT_SORT_DEFAULT_OPTIONS)
    private _defaultOptions?: ItSortDefaultOptions
  ) {}

  /**
   * Register function to be used by the contained ItSortables. Adds the ItSortable to the
   * collection of ItSortables.
   */
  register(sortable: ItSortable): void {
    this.sortables.set(sortable.id, sortable);
  }

  /**
   * Unregister function to be used by the contained ItSortables. Removes the ItSortable from the
   * collection of contained ItSortables.
   */
  deregister(sortable: ItSortable): void {
    this.sortables.delete(sortable.id);
  }

  /** Sets the active sort id and determines the new sort direction. */
  sort(sortable: ItSortable): void {
    if (this.active != sortable.id) {
      this.active = sortable.id;
      this.direction = sortable.start ? sortable.start : this.start;
    } else {
      this.direction = this.getNextSortDirection(sortable);
    }

    this.sortChange.emit({ active: this.active, direction: this.direction });
  }

  /** Returns the next sort direction of the active sortable, checking for potential overrides. */
  getNextSortDirection(sortable: ItSortable): SortDirection {
    if (!sortable) {
      return undefined;
    }

    // Get the sort direction cycle with the potential sortable overrides.
    const disableClear = sortable?.disableSortClear ?? this.disableSortClear ?? !!this._defaultOptions?.disableClear;
    const sortDirectionCycle = getSortDirectionCycle(sortable.start || this.start, disableClear);

    // Get and return the next direction in the cycle
    let nextDirectionIndex = sortDirectionCycle.indexOf(this.direction) + 1;
    if (nextDirectionIndex >= sortDirectionCycle.length) {
      nextDirectionIndex = 0;
    }
    return sortDirectionCycle[nextDirectionIndex];
  }

  ngOnChanges() {
    this._stateChanges.next();
  }

  ngOnDestroy() {
    this._stateChanges.complete();
  }
}

/** Returns the sort direction cycle to use given the provided parameters of order and clear. */
function getSortDirectionCycle(start: SortDirection, disableClear: boolean): Array<SortDirection | undefined> {
  const sortOrder: Array<SortDirection> = ['asc', 'desc'];
  if (start == 'desc') {
    sortOrder.reverse();
  }
  if (!disableClear) {
    sortOrder.push(undefined);
  }

  return sortOrder;
}
