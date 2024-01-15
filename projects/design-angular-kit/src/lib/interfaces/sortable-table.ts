import {InjectionToken} from "@angular/core";

export type SortDirection = 'asc' | 'desc' | undefined;


/** Position of the arrow that displays when sorted. */
export type SortHeaderArrowPosition = 'before' | 'after';


/** Interface for a directive that holds sorting state consumed by `ItSortHeader`. */
export interface ItSortable {
  /** The id of the column being sorted. */
  id: string;

  /** Starting sort direction. */
  start?: SortDirection;

  /** Whether to disable clearing the sorting state. */
  disableSortClear?: boolean;
}

/** The current sort state. */
export interface ItSortEvent {
  /** The id of the column being sorted. */
  active: string;

  /** The sort direction. */
  direction: SortDirection;
}


/**
 * Default options for `it-sort`.
 */
export interface ItSortDefaultOptions {
  /** Whether to disable clearing the sorting state. */
  disableClear?: boolean;
  /** Position of the arrow that displays when sorted. */
  arrowPosition?: SortHeaderArrowPosition;
}

/**
 * Injection token to be used to override the default options for `it-sort`.
 */
export const IT_SORT_DEFAULT_OPTIONS = new InjectionToken<ItSortDefaultOptions>(
  'IT_SORT_DEFAULT_OPTIONS',
);
