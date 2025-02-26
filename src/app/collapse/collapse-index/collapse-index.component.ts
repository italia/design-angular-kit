import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-collapse-index',
  templateUrl: './collapse-index.component.html',
  styleUrls: ['./collapse-index.component.scss'],
  standalone: false,
})
export class CollapseIndexComponent {
  collapseComponent: any;

  constructor() {
    this.collapseComponent = (<any>Documentation).components.find(component => component.name === 'ItCollapseComponent');
  }
}
