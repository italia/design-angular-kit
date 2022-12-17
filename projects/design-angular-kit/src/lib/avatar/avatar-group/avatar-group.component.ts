import { DomSanitizer } from '@angular/platform-browser';
import { Component, ContentChildren, QueryList, TemplateRef, ViewChild} from '@angular/core';


@Component(
  {selector: 'it-avatar-item',
  templateUrl: './avatar-group-item.component.html',
})
export class ItAvatarGroupItemComponent {
  constructor(){}
  @ViewChild(TemplateRef, { static: true }) _implicitContent: TemplateRef<any>;

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
  @ContentChildren(ItAvatarGroupItemComponent) avatars!: QueryList<ItAvatarGroupItemComponent>;
}
