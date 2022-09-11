
import {
  ChangeDetectorRef,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  forwardRef,
  Inject,
  NgZone,
  AfterContentInit,
  OnDestroy,
  Output,
  QueryList,
  Renderer2,
  SimpleChanges,
  Optional,
  OnChanges,
  Input
} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import { NgbDropdown, NgbDropdownAnchor, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle, NgbNavbar, Placement } from '@ng-bootstrap/ng-bootstrap';
import { ItDropdownConfig } from './dropdown.config';
import { Util } from '../util/util';

@Directive({selector: '.navbar'})
export class ItNavbar extends NgbNavbar {
}

/**
 * A directive you should put on a dropdown item to enable keyboard navigation.
 * Arrow keys will move focus between items marked with this directive.
 *
 * @since 4.1.0
 */
@Directive({
  selector: '[itDropdownItem]'
})
export class ItDropdownItem extends NgbDropdownItem {
  constructor(elementRef: ElementRef<HTMLElement>, _renderer: Renderer2) {
    super(elementRef, _renderer);
  }
}

/**
 * A directive that wraps dropdown menu content and dropdown items.
 */
@Directive({
  selector: '[itDropdownMenu]',
  host: {
    '[attr.data-popper-placement]': 'placement',
    '[class.full-width]':'fullWidth'
  }
})
export class ItDropdownMenu extends NgbDropdownMenu implements AfterContentInit {
  @ContentChildren(ItDropdownItem) menuItems: QueryList<ItDropdownItem>;

  @Input()
  get fullWidth(): boolean { return this._fullWidth; }
  set fullWidth(value: boolean) { this._fullWidth = Util.coerceBooleanProperty(value); }
  private _fullWidth = false;

  constructor(
      @Inject(forwardRef(() => ItDropdown)) public dropdown: ItDropdown, _elementRef: ElementRef<HTMLElement>) {
        super(dropdown, _elementRef);
    }

  ngAfterContentInit(): void {
    super.menuItems = this.menuItems;
  }



}

/**
 * A directive to mark an element to which dropdown menu will be anchored.
 *
 * This is a simple version of the `NgbDropdownToggle` directive.
 * It plays the same role, but doesn't listen to click events to toggle dropdown menu thus enabling support
 * for events other than click.
 *
 * @since 1.1.0
 */
@Directive(
    {selector: '[itDropdownAnchor]'})
export class ItDropdownAnchor extends NgbDropdownAnchor {
  constructor(
      @Inject(forwardRef(() => ItDropdown)) public dropdown: ItDropdown, _elementRef: ElementRef<HTMLElement>) {
        super(dropdown, _elementRef)
  }
}

/**
 * A directive to mark an element that will toggle dropdown via the `click` event.
 *
 * You can also use `NgbDropdownAnchor` as an alternative.
 */
@Directive({
  selector: '[itDropdownToggle]',
  providers: [{provide: ItDropdownAnchor, useExisting: forwardRef(() => ItDropdownToggle)}]
})
export class ItDropdownToggle extends NgbDropdownToggle {
  constructor(@Inject(forwardRef(() => ItDropdown)) public dropdown: ItDropdown, elementRef: ElementRef<HTMLElement>) {
    super(dropdown, elementRef);
  }
}

/**
 * A directive that provides contextual overlays for displaying lists of links and more.
 */
@Directive({selector: '[itDropdown]', exportAs: 'itDropdown'})
export class ItDropdown extends NgbDropdown implements AfterContentInit, OnChanges, OnDestroy {

  @ContentChild(ItDropdownMenu, {static: false}) _itMenu: ItDropdownMenu;
  @ContentChild(ItDropdownAnchor, {static: false}) _itAnchor: ItDropdownAnchor;

  /**
   * An event fired when the dropdown is opened or closed.
   *
   * The event payload is a `boolean`:
   * * `true` - the dropdown was opened
   * * `false` - the dropdown was closed
   */
  @Output() openChange = new EventEmitter<boolean>();

  constructor(
      _changeDetector: ChangeDetectorRef, config: ItDropdownConfig,
      @Inject(DOCUMENT) _document: any, _ngZone: NgZone, _elementRef: ElementRef<HTMLElement>,
      _renderer: Renderer2, @Optional() itNavbar: ItNavbar) {
        super(_changeDetector, config, _document, _ngZone, _elementRef, _renderer, itNavbar);
  }

  ngAfterContentInit() {
    super["_menu"] = this._itMenu;
    super["_anchor"] = this._itAnchor;

    super.ngAfterContentInit();
  }

  ngOnChanges(changes: SimpleChanges) {
    super.ngOnChanges(changes);
  }

  ngOnDestroy() { super.ngOnDestroy(); }

}