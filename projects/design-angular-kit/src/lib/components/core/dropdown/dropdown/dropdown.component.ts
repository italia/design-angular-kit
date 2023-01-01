import { Component, ContentChildren, Input, OnChanges, QueryList, SimpleChanges } from '@angular/core';
import { AbstractComponent } from '../../../../abstracts/abstract.component';
import { ButtonColor, DropdownDirection } from '../../../../interfaces/core';
import { BooleanInput, isTrueBooleanInput } from '../../../../utils/boolean-input';
import { DropdownItemComponent } from '../dropdown-item/dropdown-item.component';

@Component({
  selector: 'it-dropdown[id]',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent extends AbstractComponent implements OnChanges {

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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dark'] && !changes['dark'].firstChange) {
      this.setDarkItems();
    }
  }

  override ngAfterViewInit() {
    super.ngAfterViewInit();
    this.setDarkItems();
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

}
