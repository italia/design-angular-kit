/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, Input, OnDestroy, OnInit, Optional, ViewEncapsulation, booleanAttribute } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortDirection } from '../sort-direction';
import { IT_SORT_DEFAULT_OPTIONS, ItSortDefaultOptions, SortDirective, SortHeaderArrowPosition } from '../sort.directive';
import { Subscription, merge } from 'rxjs';
import { ItIconComponent } from '../../../../utils/icon/icon.component';


/**
 * Valid positions for the arrow to be in for its opacity and translation. If the state is a
 * sort direction, the position of the arrow will be above/below and opacity 0. If the state is
 * hint, the arrow will be in the center with a slight opacity. Active state means the arrow will
 * be fully opaque in the center.
 *
 * @docs-private
 */
export type ArrowViewState = SortDirection | 'hint' | 'active';

/**
 * States describing the arrow's animated position (animating fromState to toState).
 * If the fromState is not defined, there will be no animated transition to the toState.
 * @docs-private
 */
export interface ArrowViewStateTransition {
  fromState?: ArrowViewState;
  toState?: ArrowViewState;
}

/** Column definition associated with a `ItSortHeader`. */
interface ItSortHeaderColumnDef {
  name: string;
}


/**
 * Applies sorting behavior (click to change sort) and styles to an element, including an
 * arrow to display the current sort direction.
 *
 * Must be provided with an id and contained within a parent ItSort directive.
 *
 * If used on header cells in a CdkTable, it will automatically default its id from its containing
 * column definition.
 */
@Component({
  selector: '[it-sort-header]',
  exportAs: 'itSortHeader',
  standalone: true,
  imports: [
    CommonModule,
    ItIconComponent
  ],
  templateUrl: './sort-header.component.html',
  styleUrls: ['./sort-header.component.scss'],
  host: {
    'class': 'it-sort-header',
    '(click)': '_handleClick()',
    '(mouseenter)': '_setIndicatorHintVisible(true)',
    '(mouseleave)': '_setIndicatorHintVisible(false)',
    '[attr.aria-sort]': '_getAriaSortAttribute()',
    '[class.it-sort-header-disabled]': '_isDisabled()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortHeaderComponent implements OnDestroy, OnInit  {

  _arrowIconClass(): any {
    return `${this._arrowDirection == 'asc' ? 'arrow-up' : 'arrow-down' }`;
  }

  private _rerenderSubscription: Subscription;

  /**
   * Flag set to true when the indicator should be displayed while the sort is not active. Used to
   * provide an affordance that the header is sortable by showing on focus and hover.
   */
  _showIndicatorHint: boolean = false;

  /**
   * The view transition state of the arrow (translation/ opacity) - indicates its `from` and `to`
   * position through the animation. If animations are currently disabled, the fromState is removed
   * so that there is no animation displayed.
   */
  _viewState: ArrowViewStateTransition = {};


  /** The direction the arrow should be facing according to the current state. */
  _arrowDirection: SortDirection = '';


  /**
   * ID of this sort header. If used within the context of a CdkColumnDef, this will default to
   * the column's name.
   */
  @Input('it-sort-header') id: string;

  /** Sets the position of the arrow that displays when sorted. */
  @Input() arrowPosition: SortHeaderArrowPosition = 'after';

  /** Overrides the sort start value of the containing MatSort for this SortHeaderComponent. */
  @Input() start: SortDirection;

  /** whether the sort header is disabled. */
  @Input({transform: booleanAttribute})
  disabled: boolean = false;

  
  /** Overrides the disable clear value of the containing SortDirective for this MatSortable. */
  @Input({transform: booleanAttribute})
  disableClear: boolean;

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    // `SortDirective` is not optionally injected, but just asserted manually w/ better error.
    // tslint:disable-next-line: lightweight-tokens
    @Optional() public _sort: SortDirective,
    @Inject('IT_SORT_HEADER_COLUMN_DEF')
    @Optional()
    public _columnDef: ItSortHeaderColumnDef,
    private _elementRef: ElementRef<HTMLElement>,
    @Optional()
    @Inject(IT_SORT_DEFAULT_OPTIONS)
    defaultOptions?: ItSortDefaultOptions,
  ) {


    if (defaultOptions?.arrowPosition) {
      this.arrowPosition = defaultOptions?.arrowPosition;
    }

    this._handleStateChanges();
  }

  
  ngOnInit() {
    if (!this.id && this._columnDef) {
      this.id = this._columnDef.name;
    }

    // Initialize the direction of the arrow and set the view state to be immediately that state.
    this._updateArrowDirection();


    this._sort.register(this);
  }



    

  ngOnDestroy() {
    this._sort.deregister(this);
    this._rerenderSubscription.unsubscribe();
  }
  

  /**
   * Sets the "hint" state such that the arrow will be semi-transparently displayed as a hint to the
   * user showing what the active sort will become. If set to false, the arrow will fade away.
   */
  _setIndicatorHintVisible(visible: boolean) {
    // No-op if the sort header is disabled - should not make the hint visible.
    if (this._isDisabled() && visible) {
      return;
    }

    this._showIndicatorHint = visible;

    if (!this._isSorted()) {
      this._updateArrowDirection();

    }
  }


  _handleClick() {
    if (!this._isDisabled()) {
      this._sort.sort(this);
    }
  }



    /** Whether this MatSortHeader is currently sorted in either ascending or descending order. */
    _isSorted() {
      return (
        this._sort.active == this.id &&
        (this._sort.direction === 'asc' || this._sort.direction === 'desc')
      );
    }

  /** Returns the animation state for the arrow direction (indicator and pointers). */
  _getArrowDirectionState() {
    return `${this._isSorted() ? 'active-' : ''}${this._arrowDirection}`;
  }

  /** Returns the arrow position state (opacity, translation). */
  _getArrowViewState() {
    const fromState = this._viewState.fromState;
    return (fromState ? `${fromState}-to-` : '') + this._viewState.toState;
  }

    
  /**
   * Updates the direction the arrow should be pointing. If it is not sorted, the arrow should be
   * facing the start direction. Otherwise if it is sorted, the arrow should point in the currently
   * active sorted direction. The reason this is updated through a function is because the direction
   * should only be changed at specific times - when deactivated but the hint is displayed and when
   * the sort is active and the direction changes. Otherwise the arrow's direction should linger
   * in cases such as the sort becoming deactivated but we want to animate the arrow away while
   * preserving its direction, even though the next sort direction is actually different and should
   * only be changed once the arrow displays again (hint or activation).
   */
  _updateArrowDirection() {
    this._arrowDirection = this._isSorted() ? this._sort.direction : this.start || this._sort.start;
  }

  _isDisabled() {
    return this._sort.disabled || this.disabled;
  }

   /**
   * Gets the aria-sort attribute that should be applied to this sort header. If this header
   * is not sorted, returns null so that the attribute is removed from the host element. Aria spec
   * says that the aria-sort property should only be present on one header at a time, so removing
   * ensures this is true.
   */
   _getAriaSortAttribute() {
    if (!this._isSorted()) {
      return 'none';
    }

    return this._sort.direction == 'asc' ? 'ascending' : 'descending';
  }


 /** Handles changes in the sorting state. */
 private _handleStateChanges() {
  this._rerenderSubscription = merge(
    this._sort.sortChange,
    this._sort._stateChanges,
  ).subscribe(() => {
    if (this._isSorted()) {
      this._updateArrowDirection();

      this._showIndicatorHint = false;
    }


    this._changeDetectorRef.markForCheck();
  });
}


}
