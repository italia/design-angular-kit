import { Component, ContentChildren, HostBinding, Input, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { NgForOf, NgTemplateOutlet } from '@angular/common';

@Component({
  standalone: true,
  selector: 'it-avatar-item',
  template: '<ng-template><ng-content></ng-content></ng-template>'
})
export class ItAvatarGroupItemComponent {
  @ViewChild(TemplateRef, { static: true }) _implicitContent!: TemplateRef<any>;
}

@Component({
  standalone: true,
  selector: 'it-avatar-group',
  templateUrl: './avatar-group.component.html',
  imports: [NgForOf, NgTemplateOutlet]
})
export class ItAvatarGroupComponent {
  @Input() @HostBinding('class.link-list-wrapper') linkList = false;

  @ContentChildren(ItAvatarGroupItemComponent) avatars!: QueryList<ItAvatarGroupItemComponent>;
}
