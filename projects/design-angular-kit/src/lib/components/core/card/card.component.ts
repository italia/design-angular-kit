import { Component, Input } from '@angular/core';
import { AbstractComponent } from '../../../abstracts/abstract.component';
import { BooleanInput, isTrueBooleanInput } from '../../../utils/boolean-input';

@Component({
  selector: 'it-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent extends AbstractComponent {

  /**
   * It serves to space the cards in their mobile version.
   * @default true
   */
  @Input() space: BooleanInput = true;

  /**
   * To create cards with short or "preview" content
   */
  @Input() teaser?: BooleanInput;

  /**
   * Card with image
   */
  @Input() hasImage?: BooleanInput;

  /**
   * To add rounding effects
   */
  @Input() rounded?: BooleanInput;

  /**
   * To add shadow effects
   */
  @Input() shadow?: BooleanInput;

  /**
   * Custom card class
   */
  @Input() cardClass: string = '';

  /**
   * Custom card body class
   */
  @Input() bodyClass: string = '';

  get isSpace(): boolean {
    return isTrueBooleanInput(this.space);
  }

  get isTeaser(): boolean {
    return isTrueBooleanInput(this.teaser);
  }

  get isHasImage(): boolean {
    return isTrueBooleanInput(this.hasImage);
  }

  get isRounded(): boolean {
    return isTrueBooleanInput(this.rounded);
  }

  get isShadow(): boolean {
    return isTrueBooleanInput(this.shadow);
  }

}
