import { Component, ContentChildren, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { NgForOf, NgTemplateOutlet } from '@angular/common';


@Component({
  standalone: true,
  selector: 'it-avatar-item',
  templateUrl: './avatar-group-item.component.html',
})
export class ItAvatarGroupItemComponent {
  constructor(){}
  @ViewChild(TemplateRef, { static: true }) _implicitContent!: TemplateRef<any>;

}

@Component({
  standalone: true,
  selector: 'it-avatar-group',
  templateUrl: './avatar-group.component.html',
  host:{
    '[class.link-list-wrapper]': 'linkList'
  },
  imports: [NgForOf, NgTemplateOutlet]
})
export class ItAvatarGroupComponent {
  constructor() {}
  @ContentChildren(ItAvatarGroupItemComponent) avatars!: QueryList<ItAvatarGroupItemComponent>;
}
