import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'it-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss']
})
export class CarouselItemComponent {

  /**
   * The content of item
   */
  @ViewChild(TemplateRef)
  public htmlContent!: TemplateRef<any>;

}
