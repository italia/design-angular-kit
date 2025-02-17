import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconName } from '../../../../interfaces/icon';
import { ItLinkComponent } from '../../link/link.component';
import { ItIconComponent } from '../../../utils/icon/icon.component';
import { TranslateModule } from '@ngx-translate/core';

import { inputToBoolean } from '../../../../utils/coercion';

@Component({
  standalone: true,
  selector: 'it-dropdown-item',
  templateUrl: './dropdown-item.component.html',
  styleUrls: ['./dropdown-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ItIconComponent, TranslateModule, ItLinkComponent],
})
export class ItDropdownItemComponent extends ItLinkComponent {
  /**
   * Show divider
   * @default false
   */
  @Input({ transform: inputToBoolean }) divider?: boolean;

  /**
   * Active item
   * @default false
   */
  @Input({ transform: inputToBoolean }) active?: boolean;

  /**
   * To increase the size of links
   * @default false
   */
  @Input({ transform: inputToBoolean }) large?: boolean;

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
   * Dropdown mode
   */
  @Input() mode?: 'button' | 'link' | 'nav' = 'button';

  /**
   * Change icon color if menu is dark
   * @default false
   */
  isDark: boolean = false;

  get linkClass(): string {
    let linkClass = `list-item ${this.active ? 'active' : 'dropdown-item'}`;
    if (this.mode === 'nav') {
      linkClass += ' nav-link';
    }
    if (this.disabled) {
      linkClass += ' disabled';
    }
    if (this.large) {
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
