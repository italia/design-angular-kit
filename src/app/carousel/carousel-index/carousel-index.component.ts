import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-carousel-index',
  templateUrl: './carousel-index.component.html',
})
export class CarouselIndexComponent {
  component: any;
  componentItem: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'ItCarouselComponent');
    this.componentItem = (<any>Documentation).components.find(component => component.name === 'ItCarouselItemComponent');
  }
}
