import {
  booleanAttribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  HostListener,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  ViewEncapsulation,
} from '@angular/core';
import { ItSortDirective } from '../sort.directive';
import { merge, Subscription } from 'rxjs';
import { ItIconComponent } from '../../../../utils/icon/icon.component';
import { IconName } from '../../../../../interfaces/icon';
import {
  IT_SORT_DEFAULT_OPTIONS,
  ItSortable,
  ItSortDefaultOptions,
  SortDirection,
  SortHeaderArrowPosition,
} from '../../../../../interfaces/sortable-table';

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
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[it-sort-header]',
  exportAs: 'itSortHeader',
  imports: [ItIconComponent],
  templateUrl: './sort-header.component.html',
  styleUrls: ['./sort-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItSortHeaderComponent implements ItSortable, OnDestroy, OnInit {
  /**
   * ID of this sort header. If used within the context of a CdkColumnDef, this will default to
   * the column's name.
   */
  @Input('it-sort-header') id!: string;

  /** Sets the position of the arrow that displays when sorted. */
  @Input() arrowPosition: SortHeaderArrowPosition = 'after';

  /** Overrides the sort start value of the containing MatSort for this SortHeaderComponent. */
  @Input() start?: SortDirection;

  /** whether the sort header is disabled. */
  @Input({ transform: booleanAttribute })
  sortDisabled: boolean = false;

  /** Overrides the disable clear value of the containing SortDirective for this MatSortable. */
  @Input({ transform: booleanAttribute })
  disableSortClear?: boolean;

  @HostBinding('class')
  public readonly sortHeaderClass = 'it-sort-header';

  private _rerenderSubscription?: Subscription;

  /** The direction the arrow should be facing according to the current state. */
  private _arrowDirection?: SortDirection;

  constructor(
    private readonly _changeDetectorRef: ChangeDetectorRef,
    // `SortDirective` is not optionally injected, but just asserted manually w/ better error.
    @Optional() public readonly _sort: ItSortDirective,
    @Optional() @Inject(IT_SORT_DEFAULT_OPTIONS) defaultOptions?: ItSortDefaultOptions
  ) {
    if (defaultOptions?.arrowPosition) {
      this.arrowPosition = defaultOptions?.arrowPosition;
    }

    this._handleStateChanges();
  }

  ngOnInit() {
    // Initialize the direction of the arrow and set the view state to be immediately that state.
    this.updateArrowDirection();
    this._sort.register(this);
  }

  ngOnDestroy() {
    this._sort.deregister(this);
    this._rerenderSubscription?.unsubscribe();
  }

  @HostListener('click')
  _handleClick() {
    if (!this.isDisabled) {
      this._sort.sort(this);
    }
  }

  /**
   * Whether this MatSortHeader is currently sorted in either ascending or descending order.
   */
  protected get isSorted() {
    return this._sort.active == this.id && (this._sort.direction === 'asc' || this._sort.direction === 'desc');
  }

  /**
   * Returns the icon class by the arrow direction
   */
  protected get arrowIconClass(): IconName {
    return `${this._arrowDirection == 'asc' ? 'arrow-up' : 'arrow-down'}`;
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
  private updateArrowDirection() {
    this._arrowDirection = this.isSorted ? this._sort.direction : this.start || this._sort.start;
  }

  @HostBinding('class.it-sort-header-disabled')
  public get isDisabled() {
    return this._sort.sortDisabled || this.sortDisabled;
  }

  /**
   * Gets the aria-sort attribute that should be applied to this sort header. If this header
   * is not sorted, returns null so that the attribute is removed from the host element. Aria spec
   * says that the aria-sort property should only be present on one header at a time, so removing
   * ensures this is true.
   */
  @HostBinding('attr.aria-sort')
  public get ariaSortAttribute() {
    if (!this.isSorted) {
      return 'none';
    }

    return this._sort.direction == 'asc' ? 'ascending' : 'descending';
  }

  /** Handles changes in the sorting state. */
  private _handleStateChanges() {
    this._rerenderSubscription = merge(this._sort.sortChange, this._sort._stateChanges).subscribe(() => {
      if (this.isSorted) {
        this.updateArrowDirection();
      }
      this._changeDetectorRef.markForCheck();
    });
  }
}
