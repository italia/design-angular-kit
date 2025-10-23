import { ChangeDetectionStrategy, Component, ElementRef, inject, Input, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IconName } from '../../../../interfaces/icon';
import { ItIconComponent } from '../../../utils/icon/icon.component';
import { ItLinkComponent } from '../../link/link.component';

import { NgTemplateOutlet } from '@angular/common';
import { inputToBoolean } from '../../../../utils/coercion';

@Component({
  selector: 'it-dropdown-item, li[itDropdownItem]',
  templateUrl: './dropdown-item.component.html',
  styleUrls: ['./dropdown-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ItIconComponent, TranslateModule, ItLinkComponent, NgTemplateOutlet],
})
export class ItDropdownItemComponent extends ItLinkComponent implements OnInit {
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

  private elRef = inject(ElementRef);
  protected isHostElement = false;

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

  ngOnInit(): void {
    this.isHostElement = this.elRef.nativeElement.tagName.toLowerCase() === 'li';

    if (!this.isHostElement) {
      console.warn(
        `L'utilizzo del componente attraverso il selettore it-dropdown-item verrà deprecato in quanto non accessibile. Usa il selettore itDropdownItem invece. Consulta la documentazione del component Dropdown.`
      );
    }
  }

  setDark(dark: boolean): void {
    if (this.isDark !== dark) {
      this.isDark = dark;
      this._changeDetectorRef.detectChanges();
    }
  }
}
