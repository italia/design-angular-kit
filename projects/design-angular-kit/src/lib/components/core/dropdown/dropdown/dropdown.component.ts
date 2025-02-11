import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  QueryList,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ItAbstractComponent } from '../../../../abstracts/abstract.component';
import { ButtonColor, DropdownDirection } from '../../../../interfaces/core';
import { ItDropdownItemComponent } from '../dropdown-item/dropdown-item.component';
import { Dropdown } from 'bootstrap-italia';
import { ItIconComponent } from '../../../utils/icon/icon.component';
import { NgTemplateOutlet } from '@angular/common';
import { inputToBoolean } from '../../../../utils/coercion';

@Component({
  standalone: true,
  selector: 'it-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  exportAs: 'itDropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ItIconComponent, NgTemplateOutlet],
})
export class ItDropdownComponent extends ItAbstractComponent implements AfterViewInit, OnChanges {
  /**
   * Dropdown mode
   */
  @Input() mode: 'button' | 'link' | 'nav' = 'button';

  /**
   * Button color
   */
  @Input() color?: ButtonColor;

  /**
   * To open menu items to:
   * - <strong>dropup</strong>: up
   * - <strong>dropend</strong>: right
   * - <strong>dropstart</strong>: left
   */
  @Input() direction: DropdownDirection | undefined;

  /**
   * To get a dropdown menu as wide as the element containing the dropdown button
   * @default false
   */
  @Input({ transform: inputToBoolean }) fullWidth?: boolean;

  /**
   * Contains a Megamenu element
   * @default false
   */
  @Input({ transform: inputToBoolean }) megamenu?: boolean;

  /**
   * Dark menu style
   * @default false
   */
  @Input({ transform: inputToBoolean }) dark?: boolean;

  /**
   * The dropdown items
   */
  @ContentChildren(ItDropdownItemComponent) items?: QueryList<ItDropdownItemComponent>;

  /**
   * Fires immediately when the show instance method is called.
   */
  @Output() showEvent: EventEmitter<Event> = new EventEmitter();

  /**
   * Fired when the dropdown has been made visible to the user and CSS transitions have completed.
   */
  @Output() shownEvent: EventEmitter<Event> = new EventEmitter();

  /**
   * Fires immediately when the hide instance method has been called.
   */
  @Output() hideEvent: EventEmitter<Event> = new EventEmitter();

  /**
   * Fired when the dropdown has finished being hidden from the user and CSS transitions have completed.
   */
  @Output() hiddenEvent: EventEmitter<Event> = new EventEmitter();

  private dropdown?: Dropdown;

  @ViewChild('dropdownButton') private dropdownButton?: ElementRef<HTMLButtonElement>;

  get buttonClass(): string {
    let btnClass = 'btn dropdown-toggle';
    if (this.color) {
      btnClass += ` btn-${this.color}`;
    } else {
      btnClass += ` btn-dropdown`;
    }

    return btnClass;
  }

  override ngOnChanges(changes: SimpleChanges): void {
    if (changes['dark'] && !changes['dark'].firstChange) {
      this.setDarkItems();
    }
    if (changes['mode'] && !changes['mode'].firstChange) {
      this.updateListeners();
    }
    super.ngOnChanges(changes);
  }

  override ngAfterViewInit() {
    super.ngAfterViewInit();
    this.setDarkItems();
    this.updateListeners();
    this.items?.forEach(item => {
      item.mode = this.mode;
    });
  }

  /**
   * Set child items dark mode
   * @private
   */
  private setDarkItems(): void {
    if (this.dark !== undefined) {
      this.items?.forEach(item => {
        item.setDark(!!this.dark);
      });
    }
  }

  private updateListeners(): void {
    if (this.dropdownButton) {
      const element = this.dropdownButton.nativeElement;
      this.dropdown = Dropdown.getOrCreateInstance(element);

      element.addEventListener('show.bs.dropdown', event => this.showEvent.emit(event));
      element.addEventListener('shown.bs.dropdown', event => this.shownEvent.emit(event));
      element.addEventListener('hide.bs.dropdown', event => this.hideEvent.emit(event));
      element.addEventListener('hidden.bs.dropdown', event => this.hiddenEvent.emit(event));
    }
  }

  /**
   * Toggles the dropdown menu of a given navbar or tabbed navigation.
   */
  public toggle(): void {
    this.dropdown?.toggle();
  }

  /**
   * Shows the dropdown menu of a given navbar or tabbed navigation.
   */
  public show(): void {
    this.dropdown?.show();
  }

  /**
   * Hides the dropdown menu of a given navbar or tabbed navigation.
   */
  public hide(): void {
    this.dropdown?.hide();
  }

  /**
   * Updates the position of an element's dropdown.
   */
  public update(): void {
    this.dropdown?.update();
  }

  /**
   * Destroys an element's dropdown. (Removes stored data on the DOM element)
   */
  public dispose(): void {
    this.dropdown?.dispose();
  }
}
