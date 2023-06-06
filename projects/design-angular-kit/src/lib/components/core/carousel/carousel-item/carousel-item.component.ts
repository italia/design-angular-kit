import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { AbstractComponent } from '../../../../abstracts/abstract.component';

/**
 * Carousel Item
 * @description element, image or text slide of carousel
 */
@Component({
  standalone: true,
  selector: 'it-carousel-item',
  templateUrl: './carousel-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: []
})
export class CarouselItemComponent extends AbstractComponent {

  /**
   * The content of item
   */
  @ViewChild(TemplateRef) public htmlContent!: TemplateRef<any>;

}
