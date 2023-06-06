import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BooleanInput, isTrueBooleanInput } from '../../../../utils/boolean-input';
import { ItLinkComponent } from '../../link/link.component';
import { NgIf, NgTemplateOutlet } from '@angular/common';

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
   */
  @Input() active: BooleanInput | undefined;

  /**
   * Add large class
   */
  @Input() large: BooleanInput | undefined;

  /**
   * Add icon-left class
   */
  @Input() iconLeft: BooleanInput | undefined;

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
