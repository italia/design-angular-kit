import { Component, ContentChildren, HostBinding, Input, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { ItDropdownModule } from '../../dropdown/dropdown.module';
import { NgForOf, NgIf, NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'it-avatar-dropdown-item',
  template: '<ng-template><ng-content></ng-content></ng-template>',
  styleUrls: ['./avatar-dropdown.component.scss'],
  imports: [NgForOf, NgIf, NgTemplateOutlet]
})
export class ItAvatarDropdownItemComponent {
  @ViewChild(TemplateRef, { static: true }) _implicitContent!: TemplateRef<any>;

  /**
   * Indica il link che possiamo passare all'elemento
   */
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
  standalone: true,
  selector: 'it-avatar-dropdown',
  templateUrl: './avatar-dropdown.component.html',
  styleUrls: ['./avatar-dropdown.component.scss'],
  imports: [ItDropdownModule, NgTemplateOutlet, NgForOf, NgIf, RouterLink]
})
export class ItAvatarDropdownComponent {
  @HostBinding('class') componentClass = 'avatar avatar-dropdown';

  @ContentChildren(ItAvatarDropdownItemComponent) items!: QueryList<ItAvatarDropdownItemComponent>;
}
