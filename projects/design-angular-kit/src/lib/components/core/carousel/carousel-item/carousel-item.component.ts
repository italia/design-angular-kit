import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { ItAbstractComponent } from '../../../../abstracts/abstract.component';

/**
 * Carousel Item
 * @description element, image or text slide of carousel
 */
@Component({
  selector: 'it-carousel-item',
  templateUrl: './carousel-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class ItCarouselItemComponent extends ItAbstractComponent {
  /**
   * The content of item
   */
  @ViewChild(TemplateRef) public htmlContent!: TemplateRef<any>;
}
