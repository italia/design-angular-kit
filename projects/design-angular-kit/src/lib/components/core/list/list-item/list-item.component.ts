import { Component, Input } from '@angular/core';
import { BooleanInput, isTrueBooleanInput } from '../../../../utils/boolean-input';
import { LinkComponent } from '../../link/link.component';

@Component({
  selector: 'it-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent extends LinkComponent {

  /**
   * Add active class
   */
  @Input() active?: BooleanInput;

  /**
   * Add large class
   */
  @Input() large?: BooleanInput;

  /**
   * The avatar url
   */
  @Input() avatar?: URL;

  /**
   * The thumb image url
   */
  @Input() image?: URL;


  get itemClass(): string {
    let itemClass = 'list-item';
    if (isTrueBooleanInput(this.active)) {
      itemClass += ` active`;
    }
    if (isTrueBooleanInput(this.large)) {
      itemClass += ` large`;
    }
    if (this.class) {
      itemClass += ` ${this.class}`;
    }
    return itemClass;
  }

}
