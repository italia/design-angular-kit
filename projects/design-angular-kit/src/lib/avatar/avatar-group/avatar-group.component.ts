import { DomSanitizer } from '@angular/platform-browser';
import { Component, ContentChildren, Directive, OnInit, QueryList, AfterContentInit, ElementRef, SecurityContext, TemplateRef, ViewChild } from '@angular/core';


@Component(
  {selector: '[itAvatarItem]',
  templateUrl: './avatar-group-item.component.html',
})
export class ItAvatarGroupItemComponent {
  constructor(){}
  @ViewChild(TemplateRef, { static: true }) _implicitContent: TemplateRef<any>;

}


@Component({
  selector: '[itAvatarGroup]',
  templateUrl: './avatar-group.component.html',
})
export class AvatarGroupComponent {
  constructor() {}
  @ContentChildren(ItAvatarGroupItemComponent) avatars!: QueryList<ItAvatarGroupItemComponent>;
}
