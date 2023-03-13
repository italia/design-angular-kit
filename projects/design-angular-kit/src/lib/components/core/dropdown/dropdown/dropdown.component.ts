import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { AbstractComponent } from '../../../../abstracts/abstract.component';
import { ButtonColor, DropdownDirection } from '../../../../interfaces/core';
import { BooleanInput, isTrueBooleanInput } from '../../../../utils/boolean-input';
import { DropdownItemComponent } from '../dropdown-item/dropdown-item.component';
import { Dropdown } from 'bootstrap-italia';

@Component({
  selector: 'it-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  exportAs: 'itDropdown',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent extends AbstractComponent {

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
  @Input() direction?: DropdownDirection;

  /**
   * To get a dropdown menu as wide as the element containing the dropdown button
   */
  @Input() fullWidth?: BooleanInput;

  /**
   * Dark menu style
   */
  @Input() dark?: BooleanInput;

  /**
   * The dropdown items
   */
  @ContentChildren(DropdownItemComponent) items?: QueryList<DropdownItemComponent>;

  /**
   * Fires immediately when the show instance method is called.
   */
  @Output() onShow: EventEmitter<Event> = new EventEmitter();

  /**
   * Fired when the dropdown has been made visible to the user and CSS transitions have completed.
   */
  @Output() onShown: EventEmitter<Event> = new EventEmitter();

  /**
   * Fires immediately when the hide instance method has been called.
   */
  @Output() onHide: EventEmitter<Event> = new EventEmitter();

  /**
   * Fired when the dropdown has finished being hidden from the user and CSS transitions have completed.
   */
  @Output() onHidden: EventEmitter<Event> = new EventEmitter();


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

  get isFullWidth(): boolean {
    return isTrueBooleanInput(this.fullWidth);
  }

  get isDark(): boolean {
    return isTrueBooleanInput(this.dark);
  }

  override ngOnChanges(changes: SimpleChanges): void {
    if (changes['dark'] && !changes['dark'].firstChange) {
      this.setDarkItems();
    }
    super.ngOnChanges(changes);
  }

  override ngAfterViewInit() {
    super.ngAfterViewInit();
    this.setDarkItems();

    if (this.dropdownButton) {
      const element = this.dropdownButton.nativeElement;
      this.dropdown = Dropdown.getOrCreateInstance(element);

      element.addEventListener('show.bs.dropdown', event => this.onShow.emit(event));
      element.addEventListener('shown.bs.dropdown', event => this.onShown.emit(event));
      element.addEventListener('hide.bs.dropdown', event => this.onHide.emit(event));
      element.addEventListener('hidden.bs.dropdown', event => this.onHidden.emit(event));
    }
  }

  /**
   * Set child items dark mode
   * @private
   */
  private setDarkItems(): void {
    this.items?.forEach(item => {
      item.setDark(this.isDark);
    });
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
