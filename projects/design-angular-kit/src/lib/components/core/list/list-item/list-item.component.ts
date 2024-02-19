import { ChangeDetectionStrategy, Component, HostBinding, Input, TemplateRef } from '@angular/core';
import { inputToBoolean } from '../../../../utils/coercion';
import { ItAbstractComponent } from '../../../../abstracts/abstract.component';

@Component({
  standalone: true,
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[itListItem]',
  imports: [],
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItListItemComponent extends ItAbstractComponent {
  /**
   * Add active class
   * @default false
   */
  @Input({ transform: inputToBoolean }) active?: boolean;

  /**
   * Add size class
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
   * Is disabled
   * @default false
   */
  @Input({ transform: inputToBoolean }) disabled?: boolean;

  /**
   * The avatar url
   */
  @Input() avatar: URL | undefined;

  /**
   * The thumb image url
   */
  @Input() image: URL | undefined;

  constructor(public readonly templateRef: TemplateRef<unknown>) {
    super();
  }

  @HostBinding('class')
  public get itemClass(): string {
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
      itemClass += ` icon-left`;
    }
    if (this.iconRight) {
      itemClass += ` icon-right`;
    }
    return itemClass;
  }
}
