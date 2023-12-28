import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ItAbstractComponent } from '../../../abstracts/abstract.component';
import { BooleanInput, isTrueBooleanInput } from '../../../utils/boolean-input';

/**
 * Card
 * @description A container of texts and images with many options and variations.
 */
@Component({
  standalone: true,
  selector: 'it-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: []
})
export class ItCardComponent extends ItAbstractComponent {

  /**
   * It serves to space the cards in their mobile version.
   * @default true
   */
  @Input() space: BooleanInput = true;

  /**
   * To create cards with short or "preview" content
   * @default false
   */
  @Input() teaser: BooleanInput | undefined;

  /**
   * Card with image
   * @default false
   */
  @Input() hasImage: BooleanInput | undefined;

  /**
   * To add rounding effects
   * @default false
   */
  @Input() rounded: BooleanInput | undefined;

  /**
   * To add shadow effects
   * @default false
   */
  @Input() shadow: BooleanInput | undefined;


  /**
   * To add background and shadow
   * @default false
   */
  @Input() background: BooleanInput | undefined;

  /**
   * Custom card class
   * @default ''
   */
  @Input() cardClass: string = '';

  /**
   * Custom card body class
   * @default ''
   */
  @Input() bodyClass: string = '';

  protected get isSpace(): boolean {
    return isTrueBooleanInput(this.space);
  }

  protected get isTeaser(): boolean {
    return isTrueBooleanInput(this.teaser);
  }

  protected get isHasImage(): boolean {
    return isTrueBooleanInput(this.hasImage);
  }

  protected get isRounded(): boolean {
    return isTrueBooleanInput(this.rounded);
  }

  protected get isShadow(): boolean {
    return isTrueBooleanInput(this.shadow);
  }

  protected get isBackground(): boolean {
    return isTrueBooleanInput(this.background);
  }

}
