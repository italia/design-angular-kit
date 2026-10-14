import { Component, ChangeDetectionStrategy } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'it-collapse-index',
  templateUrl: './collapse-index.component.html',
  styleUrls: ['./collapse-index.component.scss'],
  standalone: false,
})
export class CollapseIndexComponent {
  collapseComponent: any;

  constructor() {
    this.collapseComponent = (<any>Documentation).components.find((component: any) => component.name === 'ItCollapseComponent');
  }
}
