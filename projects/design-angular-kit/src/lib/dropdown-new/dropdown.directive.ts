
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
  OnChanges
} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import { NgbDropdown, NgbDropdownAnchor, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle, NgbNavbar } from '@ng-bootstrap/ng-bootstrap';
import { ItDropdownConfig } from './dropdown.config';

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
  selector: '[itDropdownItem]',
  host: {'class': 'dropdown-item', '[class.disabled]': 'disabled', '[tabIndex]': 'disabled ? -1 : 0'}
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
    '[class.dropdown-menu]': 'true',
    '[class.show]': 'dropdown.isOpen()',
    '(keydown.ArrowUp)': 'dropdown.onKeyDown($event)',
    '(keydown.ArrowDown)': 'dropdown.onKeyDown($event)',
    '(keydown.Home)': 'dropdown.onKeyDown($event)',
    '(keydown.End)': 'dropdown.onKeyDown($event)',
    '(keydown.Enter)': 'dropdown.onKeyDown($event)',
    '(keydown.Space)': 'dropdown.onKeyDown($event)',
    '(keydown.Tab)': 'dropdown.onKeyDown($event)',
    '(keydown.Shift.Tab)': 'dropdown.onKeyDown($event)'
  }
})
export class ItDropdownMenu extends NgbDropdownMenu implements AfterContentInit {
  @ContentChildren(ItDropdownItem) menuItems: QueryList<ItDropdownItem>;

  constructor(
      @Inject(forwardRef(() => ItDropdown)) dropdown: ItDropdown, _elementRef: ElementRef<HTMLElement>) {
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
    {selector: '[itDropdownAnchor]', host: {'class': 'dropdown-toggle', '[attr.aria-expanded]': 'dropdown.isOpen()'}})
export class ItDropdownAnchor extends NgbDropdownAnchor {
  constructor(
      @Inject(forwardRef(() => ItDropdown)) dropdown: ItDropdown, _elementRef: ElementRef<HTMLElement>) {
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
  host: {
    'class': 'dropdown-toggle',
    '[attr.aria-expanded]': 'dropdown.isOpen()',
    '(click)': 'dropdown.toggle()',
    '(keydown.ArrowUp)': 'dropdown.onKeyDown($event)',
    '(keydown.ArrowDown)': 'dropdown.onKeyDown($event)',
    '(keydown.Home)': 'dropdown.onKeyDown($event)',
    '(keydown.End)': 'dropdown.onKeyDown($event)',
    '(keydown.Tab)': 'dropdown.onKeyDown($event)',
    '(keydown.Shift.Tab)': 'dropdown.onKeyDown($event)'
  },
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
@Directive({selector: '[itDropdown]', exportAs: 'itDropdown', host: {'[class.show]': 'isOpen()'}})
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

  toggle() {
    super.toggle();
  }
 
  ngOnDestroy() { super.ngOnDestroy(); }

  
}