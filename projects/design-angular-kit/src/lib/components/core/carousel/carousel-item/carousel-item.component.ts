import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { AbstractComponent } from '../../../../abstracts/abstract.component';

@Component({
  selector: 'it-carousel-item',
  templateUrl: './carousel-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselItemComponent extends AbstractComponent {

  /**
   * The content of item
   */
  @ViewChild(TemplateRef) public htmlContent!: TemplateRef<any>;

}
