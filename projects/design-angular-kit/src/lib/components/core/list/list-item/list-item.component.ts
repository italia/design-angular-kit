import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ItLinkComponent } from '../../link/link.component';
import { NgIf, NgTemplateOutlet } from '@angular/common';
import { inputToBoolean } from '../../../../utils/coercion';

@Component({
  standalone: true,
  selector: 'it-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf, NgTemplateOutlet, ItLinkComponent]
})
export class ItListItemComponent extends ItLinkComponent {

  /**
   * Add active class
   * @default false
   */
  @Input({ transform: inputToBoolean }) active?: boolean;

  /**
   * Add large class
   */
  @Input() large?: boolean;

  /**
   * Add icon-left class
   * @default false
   */
  @Input({ transform: inputToBoolean }) iconLeft?: boolean;

  /**
   * Add icon-right class
   * @default false
   */
  @Input({ transform: inputToBoolean }) iconRight?: boolean;

  /**
   * The avatar url
   */
  @Input() avatar: URL | undefined;

  /**
   * The thumb image url
   */
  @Input() image: URL | undefined;


  get itemClass(): string {
    let itemClass = 'list-item';
    if (this.disabled) {
      itemClass += ` disabled`;
    }
    if (this.active) {
      itemClass += ` active`;
    }
    if (this.large) {
      itemClass += ` large`;
    }
    if (this.iconLeft) {
      itemClass += ` icon-left`;
    }
    if (this.iconRight) {
      itemClass += ` icon-right`;
    }
    if (this.class) {
      itemClass += ` ${this.class}`;
    }
    return itemClass;
  }

}
