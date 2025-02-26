import { ChangeDetectionStrategy, Component, ElementRef, Input } from '@angular/core';
import { ItLinkComponent } from '../../link/link.component';
import { NgTemplateOutlet } from '@angular/common';
import { inputToBoolean } from '../../../../utils/coercion';

@Component({
  selector: 'it-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet, ItLinkComponent],
})
export class ItListItemComponent extends ItLinkComponent {
  constructor(private elRef: ElementRef) {
    super();
  }

  /**
   * Add active class
   * @default false
   */
  @Input({ transform: inputToBoolean }) active?: boolean;

  /**
   * Add large class
   */
  @Input() size?: 'large' | 'medium';

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
    const inSidebar: boolean = this.elRef.nativeElement.closest('.sidebar-linklist-wrapper') ? true : false;
    let itemClass = 'list-item';
    if (this.disabled) {
      itemClass += ` disabled`;
    }
    if (this.active) {
      itemClass += ` active`;
    }
    if (this.size) {
      itemClass += ` ${this.size}`;
    }
    if (this.iconLeft) {
      itemClass += inSidebar ? ` left-icon` : ` icon-left`;
    }
    if (this.iconRight) {
      itemClass += inSidebar ? ` right-icon` : ` icon-right`;
    }
    if (this.class) {
      itemClass += ` ${this.class}`;
    }
    return itemClass;
  }
}
