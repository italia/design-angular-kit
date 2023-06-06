import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BooleanInput, isTrueBooleanInput } from '../../../../utils/boolean-input';
import { IconName } from '../../../../interfaces/icon';
import { ItLinkComponent } from '../../link/link.component';
import { ItIconComponent } from '../../../utils/icon/icon.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'it-dropdown-item',
  templateUrl: './dropdown-item.component.html',
  styleUrls: ['./dropdown-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf, ItIconComponent, TranslateModule, ItLinkComponent]
})
export class ItDropdownItemComponent extends ItLinkComponent {

  /**
   * Show divider
   */
  @Input() divider: BooleanInput | undefined;

  /**
   * Active item
   */
  @Input() active: BooleanInput | undefined;

  /**
   * To increase the size of links
   */
  @Input() large: BooleanInput | undefined;

  /**
   * The name of icon to show
   */
  @Input() iconName: IconName | undefined;

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

  setDark(dark: boolean): void {
    if (this.isDark !== dark) {
      this.isDark = dark;
      this._changeDetectorRef.detectChanges();
    }
  }
}
