import { Component, ContentChildren, HostBinding, Input, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { ItDropdownModule } from '../../dropdown/dropdown.module';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'it-avatar-dropdown-item',
  template: '<ng-template><ng-content></ng-content></ng-template>',
  styleUrls: ['./avatar-dropdown.component.scss'],
  imports: [NgTemplateOutlet],
})
export class ItAvatarDropdownItemComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @ViewChild(TemplateRef, { static: true }) _implicitContent!: TemplateRef<any>;

  /**
   * Indica il link che possiamo passare all'elemento
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() link: string | any[] | null | undefined;

  /**
   * Permette di utilizzare l'attributo html title
   */
  @Input() title?: string;

  /**
   * Permette di utilizzare l'attributo html accesskey
   */
  @Input() accesskey?: string;

  /**
   * Permette di utilizzare l'attributo html tabindex
   */
  @Input() tabindex?: number;
}

@Component({
  selector: 'it-avatar-dropdown',
  templateUrl: './avatar-dropdown.component.html',
  styleUrls: ['./avatar-dropdown.component.scss'],
  imports: [ItDropdownModule, NgTemplateOutlet, RouterLink],
})
export class ItAvatarDropdownComponent {
  @HostBinding('class') componentClass = 'avatar avatar-dropdown';

  @ContentChildren(ItAvatarDropdownItemComponent) items!: QueryList<ItAvatarDropdownItemComponent>;
}
