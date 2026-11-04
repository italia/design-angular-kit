import { Component, ChangeDetectionStrategy } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'it-pagination-index',
  templateUrl: './pagination-index.component.html',
  standalone: false,
})
export class PaginationIndexComponent {
  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find((component: any) => component.name === 'ItPaginationComponent');
  }
}
