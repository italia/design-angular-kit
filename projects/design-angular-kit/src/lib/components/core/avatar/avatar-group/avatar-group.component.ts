import { Component, ContentChildren, QueryList, TemplateRef, ViewChild } from '@angular/core';


@Component(
  {selector: 'it-avatar-item',
  templateUrl: './avatar-group-item.component.html',
})
export class AvatarGroupItemComponent {
  constructor(){}
  @ViewChild(TemplateRef, { static: true }) _implicitContent!: TemplateRef<any>;

}

@Component({
  selector: 'it-avatar-group',
  templateUrl: './avatar-group.component.html',
  host:{
    '[class.link-list-wrapper]': 'linkList'
  }
})
export class AvatarGroupComponent {
  constructor() {}
  @ContentChildren(AvatarGroupItemComponent) avatars!: QueryList<AvatarGroupItemComponent>;
}
