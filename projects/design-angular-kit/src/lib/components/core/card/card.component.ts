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
   * To create inline cards
   * @default false
   */
  @Input({ transform: inputToBoolean }) inline?: boolean;

  /**
   * To create inline mini cards
   * @default false
   */
  @Input({ transform: inputToBoolean }) mini?: boolean;

  /**
   * To add border
   * @default true
   */
  @Input({ transform: inputToBoolean }) border: boolean = true;

  /**
   * To create banner cards
   * @default false
   */
  @Input({ transform: inputToBoolean }) banner?: boolean;

  /**
   * To create profile cards
   * @default false
   */
  @Input({ transform: inputToBoolean }) profile?: boolean;

  /**
   * To create inline reverse cards
   * @default false
   */
  @Input({ transform: inputToBoolean }) reverse?: boolean;

  /**
   * To create full height cards
   * @default false
   */
  @Input({ transform: inputToBoolean }) fullHeight?: boolean;

  /**
   * Card with image
   * @default false
   */
  @Input({ transform: inputToBoolean }) hasImage?: boolean;

  /**
   * To add top border
   * @default false
   */
  @Input({ transform: inputToBoolean }) borderTop?: boolean;

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

  /**
   * Shadow type
   * @default 'sm'
   */
  @Input() shadow: 'sm' | 'lg' | 'normal' | 'none' = 'sm';

  //'button' | 'reset' | 'submit' = 'button';
}
