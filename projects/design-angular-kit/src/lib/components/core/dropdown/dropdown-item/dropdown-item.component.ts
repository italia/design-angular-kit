import { ChangeDetectorRef, Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { BooleanInput, isTrueBooleanInput } from '../../../../utils/boolean-input';
import { IconName } from '../../../../interfaces/icon';
import { LinkComponent } from '../../link/link.component';

@Component({
  selector: 'it-dropdown-item',
  templateUrl: './dropdown-item.component.html',
  styleUrls: ['./dropdown-item.component.scss']
})
export class DropdownItemComponent extends LinkComponent {

  /**
   * Show divider
   */
  @Input() divider?: BooleanInput;

  /**
   * Active item
   */
  @Input() active?: BooleanInput;

  /**
   * To increase the size of links
   */
  @Input() large?: BooleanInput;

  /**
   * The name of icon to show
   */
  @Input() iconName?: IconName;

  /**
   * The icon position
   * @default right
   */
  @Input() iconPosition: 'left' | 'right' = 'right';

  /**
   * Change icon color if menu is dark
   * @default false
   */
  isDark: boolean = false;

  get isDivider(): boolean {
    return isTrueBooleanInput(this.divider);
  }

  get isActive(): boolean {
    return isTrueBooleanInput(this.active);
  }

  get isLarge(): boolean {
    return isTrueBooleanInput(this.large);
  }

  get linkClass(): string {
    let linkClass = `list-item ${this.isActive ? 'active' : 'dropdown-item'}`;
    if (this.isDisabled) {
      linkClass += ' disabled';
    }
    if (this.isLarge) {
      linkClass += ' large';
    }
    if (this.iconName) {
      linkClass += ` ${this.iconPosition === 'right' ? 'right-icon' : 'left-icon'}`;
    }

    return linkClass;
  }

  constructor(
    protected override readonly _renderer: Renderer2,
    protected override readonly _elementRef: ElementRef,
    private readonly _changeDetectorRef: ChangeDetectorRef
  ) {
    super(_renderer, _elementRef);
  }

  setDark(dark: boolean): void {
    if (this.isDark !== dark) {
      this.isDark = dark;
      this._changeDetectorRef.detectChanges();
    }
  }
}
