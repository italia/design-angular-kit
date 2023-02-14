import { Component, ViewChild, TemplateRef, ContentChildren, QueryList, Input, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'it-avatar-dropdown-item',
  templateUrl: './avatar-dropdown-item.component.html',
  styleUrls: ['./avatar-dropdown.component.scss'],
})
export class AvatarDropDownItemComponent{
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
  selector: 'it-avatar-dropdown',
  templateUrl: './avatar-dropdown.component.html',
  styleUrls: ['./avatar-dropdown.component.scss'],
  host: { 'class': 'avatar avatar-dropdown' }
})
export class AvatarDropdownComponent{
  constructor() { }
  @ContentChildren(AvatarDropDownItemComponent) items! : QueryList<AvatarDropDownItemComponent>
}
