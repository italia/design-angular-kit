import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BooleanInput, isTrueBooleanInput } from '../../../../utils/boolean-input';
import { LinkComponent } from '../../link/link.component';

@Component({
  selector: 'it-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent extends LinkComponent {

  /**
   * Add active class
   */
  @Input() protected active?: BooleanInput;

  /**
   * Add large class
   */
  @Input() protected large?: BooleanInput;

  /**
   * Add icon-left class
   */
  @Input() protected iconLeft?: BooleanInput;

  /**
   * The avatar url
   */
  @Input() protected avatar?: URL;

  /**
   * The thumb image url
   */
  @Input() protected image?: URL;


  get itemClass(): string {
    let itemClass = 'list-item';
    if (isTrueBooleanInput(this.active)) {
      itemClass += ` active`;
    }
    if (isTrueBooleanInput(this.large)) {
      itemClass += ` large`;
    }
    if (isTrueBooleanInput(this.iconLeft)) {
      itemClass += ` icon-left`;
    }
    if (this.class) {
      itemClass += ` ${this.class}`;
    }
    return itemClass;
  }

}
