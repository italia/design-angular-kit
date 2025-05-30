import { NgTemplateOutlet } from '@angular/common';
import { Component, ContentChildren, Directive, HostBinding, Input, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { inputToBoolean } from '../../../../utils/coercion';

@Directive({
  standalone: true,
  selector: '[itAvatarListItem]',
  exportAs: 'itAvatarListItem',
})
export class ItAvatarListItemDirective {
  @HostBinding('class')
  get hostClasses(): string {
    const cssClass = `list-item`;
    return cssClass;
  }
}

@Component({
  standalone: true,
  selector: 'it-avatar-item',
  template: `<ng-template let-linkListItem="linkList">
    <ng-content></ng-content>
  </ng-template>`,
})
export class ItAvatarGroupItemComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @ViewChild(TemplateRef, { static: true }) _implicitContent!: TemplateRef<any>;
}

@Component({
  selector: 'it-avatar-group',
  imports: [NgTemplateOutlet],
  template: `
    <ul [class]="linkList ? 'link-list avatar-group' : 'avatar-group-stacked'">
      @for (avatar of avatars; track avatar) {
        <li>
          <ng-container *ngTemplateOutlet="avatar._implicitContent; context: { linkList: linkList }"></ng-container>
        </li>
      }
    </ul>
  `,
})
export class ItAvatarGroupComponent {
  @Input({ transform: inputToBoolean }) @HostBinding('class.link-list-wrapper') linkList = false;

  @ContentChildren(ItAvatarGroupItemComponent) avatars!: QueryList<ItAvatarGroupItemComponent>;
}
