import { Component, ChangeDetectionStrategy } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'it-carousel-index',
  templateUrl: './carousel-index.component.html',
  standalone: false,
})
export class CarouselIndexComponent {
  component: any;
  componentItem: any;

  constructor() {
    this.component = (<any>Documentation).components.find((component: any) => component.name === 'ItCarouselComponent');
    this.componentItem = (<any>Documentation).components.find((component: any) => component.name === 'ItCarouselItemComponent');
  }
}
