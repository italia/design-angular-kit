import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-rating-index',
  templateUrl: './rating-index.component.html',
  standalone: false,
})
export class RatingIndexComponent {
  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'ItRatingComponent');
  }
}
