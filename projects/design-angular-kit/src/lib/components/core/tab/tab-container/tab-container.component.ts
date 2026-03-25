import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { ItTabItemComponent } from '../tab-item/tab-item.component';
import { of, startWith, Subscription, switchMap, tap } from 'rxjs';
import { Tab } from 'bootstrap-italia';
import { ItAbstractComponent } from '../../../../abstracts/abstract.component';
import { NgTemplateOutlet } from '@angular/common';
import { ItIconComponent } from '../../../utils/icon/icon.component';
import { inputToBoolean } from '../../../../utils/coercion';

/** Bootstrap Italia breakpoint names and their minimum widths in px. */
export type BootstrapBreakpoint = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

const BREAKPOINT_PX: Record<BootstrapBreakpoint, number> = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

@Component({
  selector: 'it-tab-container',
  templateUrl: './tab-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ItIconComponent, NgTemplateOutlet],
})
export class ItTabContainerComponent extends ItAbstractComponent implements OnDestroy, AfterViewInit {
  /**
   * Tabs automatically occupy the entire available width
   * @default false
   */
  @Input({ transform: inputToBoolean }) auto?: boolean;

  /**
   * To obtain the correct margin between text and icon in the horizontally developed tab
   */
  @Input({ transform: inputToBoolean }) iconText?: boolean;

  /**
   * Dark style
   */
  @Input({ transform: inputToBoolean }) dark?: boolean;

  /**
   * Show items as cards
   */
  @Input({ transform: inputToBoolean }) cards?: boolean;

  /**
   * Show vertical navigation.
   * When used together with `verticalBreakpoint`, this acts as the initial state
   * and becomes responsive — vertical above the breakpoint, horizontal below it.
   */
  @Input({ transform: inputToBoolean }) vertical?: boolean;

  /**
   * When set, the tab container switches from vertical to horizontal layout
   * below the specified Bootstrap breakpoint.
   * Requires `vertical` to be set to `true`.
   *
   * @example
   * ```html
   * <it-tab-container vertical verticalBreakpoint="md">
   *   <!-- vertical on md+ screens, horizontal on smaller -->
   * </it-tab-container>
   * ```
   */
  @Input() verticalBreakpoint?: BootstrapBreakpoint;

  /**
   * The tab position
   */
  @Input({ transform: inputToBoolean }) inverted?: boolean;

  /**
   * If tabs are editable
   */
  @Input({ transform: inputToBoolean }) editable?: boolean;

  /**
   * The tab items
   */
  @ContentChildren(ItTabItemComponent) tabs?: QueryList<ItTabItemComponent>;

  @ViewChildren('tabNavLinks') private tabNavLinks?: QueryList<ElementRef<HTMLAnchorElement>>;

  @Output() tabSelected = new EventEmitter<ItTabItemComponent>();

  @Output() tabClosed = new EventEmitter();

  @Output() tabAdded = new EventEmitter();

  /** Computed vertical state (respects responsive breakpoint). */
  get isVertical(): boolean {
    if (this.verticalBreakpoint && this.vertical) {
      return this._isVerticalResponsive;
    }
    return !!this.vertical;
  }

  private tabSubscriptions?: Array<Subscription>;
  private _mediaQueryList?: MediaQueryList;
  private _mediaHandler?: (e: MediaQueryListEvent) => void;
  private _isVerticalResponsive = true;

  constructor() {
    super();
  }

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();

    this._setupResponsiveBreakpoint();

    this.tabs?.changes
      .pipe(
        // When tabs changes (dynamic add/remove)
        startWith(undefined),
        tap(() => {
          this.tabSubscriptions?.forEach(sub => sub.unsubscribe()); // Remove old subscriptions
          this.tabSubscriptions = this.tabs?.map(tab =>
            tab.valueChanges.subscribe(() => {
              this._changeDetectorRef.detectChanges(); // DetectChanges when tab-item attributes changes
            })
          );
          this._changeDetectorRef.detectChanges(); // Force update html render
        }),
        switchMap(() => this.tabNavLinks?.changes.pipe(startWith(undefined)) || of(undefined))
      )
      .subscribe(() => {
        // Init tabs from bootstrap-italia
        this.tabNavLinks?.forEach(tabNavLink => {
          const triggerEl = tabNavLink.nativeElement,
            tabTrigger = Tab.getOrCreateInstance(triggerEl);

          if (triggerEl.getAttribute('tab-listener') !== 'true') {
            triggerEl.addEventListener('click', event => {
              event.preventDefault();
              tabTrigger.show();
              this._changeDetectorRef.detectChanges();
            });
            triggerEl.setAttribute('tab-listener', 'true'); // Prevents multiple insertion of the listener
          }
        });
      });
  }

  ngOnDestroy(): void {
    this.tabSubscriptions?.forEach(sub => sub.unsubscribe());
    this._teardownResponsiveBreakpoint();
  }

  onTab(tab: ItTabItemComponent) {
    this.tabSelected.emit(tab);
  }

  clickToClose(index: number) {
    this.tabClosed.emit(index);
  }

  clickToAdd($event: Event) {
    $event.preventDefault();
    this.tabAdded.emit();
  }

  private _setupResponsiveBreakpoint(): void {
    if (!this.verticalBreakpoint || !this.vertical) {
      return;
    }

    const minWidth = BREAKPOINT_PX[this.verticalBreakpoint];
    if (typeof window === 'undefined' || !window.matchMedia) {
      return;
    }

    this._mediaQueryList = window.matchMedia(`(min-width: ${minWidth}px)`);
    this._isVerticalResponsive = this._mediaQueryList.matches;

    this._mediaHandler = (e: MediaQueryListEvent) => {
      this._isVerticalResponsive = e.matches;
      this._changeDetectorRef.detectChanges();
    };
    this._mediaQueryList.addEventListener('change', this._mediaHandler);
  }

  private _teardownResponsiveBreakpoint(): void {
    if (this._mediaQueryList && this._mediaHandler) {
      this._mediaQueryList.removeEventListener('change', this._mediaHandler);
      this._mediaQueryList = undefined;
      this._mediaHandler = undefined;
    }
  }
}
