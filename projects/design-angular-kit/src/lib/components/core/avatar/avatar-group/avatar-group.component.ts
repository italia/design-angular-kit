import { Component, ContentChildren, HostBinding, Input, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { inputToBoolean } from '../../../../utils/coercion';

@Component({
  standalone: true,
  selector: 'it-avatar-item',
  template: '<ng-template><ng-content></ng-content></ng-template>',
})
export class ItAvatarGroupItemComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @ViewChild(TemplateRef, { static: true }) _implicitContent!: TemplateRef<any>;
}

@Component({
  selector: 'it-avatar-group',
  templateUrl: './avatar-group.component.html',
  imports: [NgTemplateOutlet],
})
export class ItAvatarGroupComponent {
  @Input({ transform: inputToBoolean }) @HostBinding('class.link-list-wrapper') linkList = false;

  @ContentChildren(ItAvatarGroupItemComponent) avatars!: QueryList<ItAvatarGroupItemComponent>;
}
