import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ItAbstractComponent } from '../../../abstracts/abstract.component';
import { NgTemplateOutlet } from '@angular/common';
import { inputToBoolean } from '../../../utils/coercion';

/**
 * Card
 * @description A container of texts and images with many options and variations.
 */
@Component({
  selector: 'it-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet],
})
export class ItCardComponent extends ItAbstractComponent {
  /**
   * To create cards with short or "preview" content
   * @default false
   */
  @Input({ transform: inputToBoolean }) teaser?: boolean;

  /**
   * To create special cards
   * @default false
   */
  @Input({ transform: inputToBoolean }) special?: boolean;

  /**
   * Card with image
   * @default false
   */
  @Input({ transform: inputToBoolean }) hasImage?: boolean;

  /**
   * To add rounding effects
   * @default false
   */
  @Input({ transform: inputToBoolean }) rounded?: boolean;

  /**
   * To add shadow effects
   * @default false
   */
  @Input({ transform: inputToBoolean }) shadow?: boolean;

  /**
   * To add background and shadow
   * @default false
   */
  @Input({ transform: inputToBoolean }) background?: boolean;

  /**
   * To add bottom border
   * @default false
   */
  @Input({ transform: inputToBoolean }) borderBottom?: boolean;

  /**
   * To render a big card
   * @default false
   */
  @Input({ transform: inputToBoolean }) big?: boolean;

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
}
