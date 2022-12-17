import { Component, OnInit, ViewChild, TemplateRef, ContentChildren, QueryList, Input, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'it-avatar-dropdown-item',
  templateUrl: './avatar-dropdown-item.component.html',
  styleUrls: ['./avatar-dropdown.component.scss'],
})
export class ItAvatarDropDownItemComponent{
  @ViewChild(TemplateRef, {static: true}) _implicitContent: TemplateRef<any>
  /**
   * Indica il link che possiamo passare all'elemento
   * è di tipo Routerlink
   */
  @Input() link: RouterLink
  /**
   * Permette di utilizzare l'attributo html title
   * è di tipo string
   */
  @Input() title: string
  /**
   * Permette di utilizzare l'attributo html accesskey
   * è di tipo string
   */
  @Input() accesskey: string
    /**
   * Permette di utilizzare l'attributo html tabindex
   * è di tipo number
   */
  @Input() tabindex: number
}

@Component({
  selector: 'it-avatar-dropdown',
  templateUrl: './avatar-dropdown.component.html',
  styleUrls: ['./avatar-dropdown.component.scss'],
  host: { 'class': 'avatar avatar-dropdown' }
})
export class ItAvatarDropdownComponent{
  constructor() { }
  @ContentChildren(ItAvatarDropDownItemComponent) items! : QueryList<ItAvatarDropDownItemComponent>
}
