import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgIf, NgTemplateOutlet } from '@angular/common';
import { inputToBoolean } from '../../../../utils/coercion';

@Component({
  standalone: true,
  selector: 'it-list',
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf, NgTemplateOutlet]
})
export class ItListComponent {

  /**
   * Add 'link-list' class for navigation menu
   * @default false
   */
  @Input({ transform: inputToBoolean }) linkList?: boolean;

  /**
   * Add 'link-sublist' class for navigation menu
   * @default false
   */
  @Input({ transform: inputToBoolean }) linkSubList?: boolean;

  /**
   * Add 'multiline' class for wrapper
   * @default false
   */
  @Input({ transform: inputToBoolean }) multiline?: boolean;

}
