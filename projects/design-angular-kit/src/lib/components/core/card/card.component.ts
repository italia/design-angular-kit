import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ItAbstractComponent } from '../../../abstracts/abstract.component';
import { BooleanInput, isTrueBooleanInput } from '../../../utils/boolean-input';
import { NgIf, NgTemplateOutlet } from '@angular/common';

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
  imports: [NgIf, NgTemplateOutlet]
})
export class ItCardComponent extends ItAbstractComponent {

  /**
   * To create cards with short or "preview" content
   * @default false
   */
  @Input() teaser: BooleanInput | undefined;

  /**
   * To create special cards
   * @default false
   */
  @Input() special: BooleanInput | undefined;

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
   * To add bottom border
   * @default false
   */
  @Input() borderBottom: BooleanInput | undefined;


  /**
   * To render a big card
   * @default false
   */
    @Input() big: BooleanInput | undefined;

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

  protected get isTeaser(): boolean {
    return isTrueBooleanInput(this.teaser);
  }

  protected get isSpecial(): boolean {
    return isTrueBooleanInput(this.special);
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

  protected get isBig(): boolean {
    return isTrueBooleanInput(this.big);
  }

  protected get isBorderedBottom(): boolean {
    return isTrueBooleanInput(this.borderBottom);
  }

}
