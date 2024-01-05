/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


import { Directive, EventEmitter, Inject, InjectionToken, Input, OnChanges, OnDestroy, Optional, Output, booleanAttribute } from '@angular/core';
import { SortDirection } from './sort-direction';
import { Subject } from 'rxjs';


/** Position of the arrow that displays when sorted. */
export type SortHeaderArrowPosition = 'before' | 'after';



/** Interface for a directive that holds sorting state consumed by `ItSortHeader`. */
export interface ItSortable {
  /** The id of the column being sorted. */
  id: string;

  /** Starting sort direction. */
  start: SortDirection;

  /** Whether to disable clearing the sorting state. */
  disableClear: boolean;
}

/** The current sort state. */
export interface Sort {
  /** The id of the column being sorted. */
  active: string;

  /** The sort direction. */
  direction: SortDirection;
}


/** Default options for `it-sort`.  */
export interface ItSortDefaultOptions {
  /** Whether to disable clearing the sorting state. */
  disableClear?: boolean;
  /** Position of the arrow that displays when sorted. */
  arrowPosition?: SortHeaderArrowPosition;
}

/** Injection token to be used to override the default options for `it-sort`. */
export const IT_SORT_DEFAULT_OPTIONS = new InjectionToken<ItSortDefaultOptions>(
  'IT_SORT_DEFAULT_OPTIONS',
);


@Directive({
  standalone: true,
  selector: '[itSort]',
  exportAs: 'itSort',
  host: {
    'class': 'it-sort',
  }
})
export class SortDirective implements OnChanges, OnDestroy {

  /** Collection of all registered sortables that this directive manages. */
  sortables = new Map<string, ItSortable>();

  /** Used to notify any child components listening to state changes. */
  readonly _stateChanges = new Subject<void>();

  /** The id of the most recently sorted ItSortable. */
  @Input('itSortActive') active: string;

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
  private _direction: SortDirection = '';


  /**
   * Whether to disable the user from clearing the sort by finishing the sort direction cycle.
   * May be overridden by the ItSortable's disable clear input.
   */
  @Input({alias: 'itSortDisableClear', transform: booleanAttribute})
  disableClear: boolean;


  /** Whether the sortable is disabled. */
  @Input({alias: 'itSortDisabled', transform: booleanAttribute})
  disabled: boolean = false;

  /** Event emitted when the user changes either the active sort or sort direction. */
  @Output('itSortChange') readonly sortChange: EventEmitter<Sort> = new EventEmitter<Sort>();

  constructor(
    @Optional()
    @Inject(IT_SORT_DEFAULT_OPTIONS)
    private _defaultOptions?: ItSortDefaultOptions,
  ) {
  }


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

    this.sortChange.emit({active: this.active, direction: this.direction});
  }



  /** Returns the next sort direction of the active sortable, checking for potential overrides. */
  getNextSortDirection(sortable: ItSortable): SortDirection {
  if (!sortable) {
    return '';
  }

  // Get the sort direction cycle with the potential sortable overrides.
  const disableClear =
    sortable?.disableClear ?? this.disableClear ?? !!this._defaultOptions?.disableClear;
  let sortDirectionCycle = getSortDirectionCycle(sortable.start || this.start, disableClear);

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
function getSortDirectionCycle(start: SortDirection, disableClear: boolean): SortDirection[] {
  let sortOrder: SortDirection[] = ['asc', 'desc'];
  if (start == 'desc') {
    sortOrder.reverse();
  }
  if (!disableClear) {
    sortOrder.push('');
  }

  return sortOrder;
}