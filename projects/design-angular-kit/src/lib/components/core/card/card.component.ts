import { ChangeDetectionStrategy, Component, Input, booleanAttribute } from '@angular/core';
import { ItAbstractComponent } from '../../../abstracts/abstract.component';
import { NgTemplateOutlet } from '@angular/common';

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
  @Input({ transform: booleanAttribute }) inline?: boolean;

  /**
   * To create inline mini cards
   * @default false
   */
  @Input({ transform: booleanAttribute }) mini?: boolean;

  /**
   * To add border
   * @default true
   */
  @Input({ transform: booleanAttribute }) border: boolean = true;

  /**
   * To create banner cards
   * @default false
   */
  @Input({ transform: booleanAttribute }) banner?: boolean;

  /**
   * To create profile cards
   * @default false
   */
  @Input({ transform: booleanAttribute }) profile?: boolean;

  /**
   * To create rounded cards
   * @default false
   */
  @Input({ transform: booleanAttribute }) rounded?: boolean;

  /**
   * To create inline reverse cards
   * @default false
   */
  @Input({ transform: booleanAttribute }) reverse?: boolean;

  /**
   * To create full height cards
   * @default false
   */
  @Input({ transform: booleanAttribute }) fullHeight?: boolean;

  /**
   * Card with image
   * @default false
   */
  @Input({ transform: booleanAttribute }) hasImage?: boolean;

  /**
   * To add top border
   * @default false
   */
  @Input({ transform: booleanAttribute }) borderTop?: boolean;

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
