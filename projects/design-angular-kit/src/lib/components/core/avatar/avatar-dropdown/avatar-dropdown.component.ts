import { Component, ViewChild, TemplateRef, ContentChildren, QueryList, Input, ViewEncapsulation } from '@angular/core';
import { ItDropdownModule } from '../../dropdown/dropdown.module';
import { NgForOf, NgIf, NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  standalone: true,
  selector: 'it-avatar-dropdown-item',
  templateUrl: './avatar-dropdown-item.component.html',
  styleUrls: ['./avatar-dropdown.component.scss'],
  imports: [NgForOf, NgIf, NgTemplateOutlet]
})
export class ItAvatarDropdownItemComponent{
  @ViewChild(TemplateRef, {static: true}) _implicitContent!: TemplateRef<any>
  /**
   * Indica il link che possiamo passare all'elemento
   */
  @Input() link?: string | any[] | null | undefined;
  /**
   * Permette di utilizzare l'attributo html title
   */
  @Input() title?: string
  /**
   * Permette di utilizzare l'attributo html accesskey
   */
  @Input() accesskey?: string
    /**
   * Permette di utilizzare l'attributo html tabindex
   */
  @Input() tabindex?: number
}

@Component({
  standalone: true,
  selector: 'it-avatar-dropdown',
  templateUrl: './avatar-dropdown.component.html',
  styleUrls: ['./avatar-dropdown.component.scss'],
  host: { 'class': 'avatar avatar-dropdown' },
  imports: [ItDropdownModule, NgTemplateOutlet, NgForOf, NgIf, RouterLink]
})
export class ItAvatarDropdownComponent{
  constructor() { }
  @ContentChildren(ItAvatarDropdownItemComponent) items! : QueryList<ItAvatarDropdownItemComponent>
}
