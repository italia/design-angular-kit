import { ChangeDetectionStrategy, Component, Input, booleanAttribute } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'it-list',
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet],
})
export class ItListComponent {
  /**
   * Add 'link-list' class for navigation menu
   * @default false
   */
  @Input({ transform: booleanAttribute }) linkList?: boolean;

  /**
   * Add 'link-sublist' class for navigation menu
   * @default false
   */
  @Input({ transform: booleanAttribute }) linkSubList?: boolean;

  /**
   * Add 'multiline' class for wrapper
   * @default false
   */
  @Input({ transform: booleanAttribute }) multiline?: boolean;
}
