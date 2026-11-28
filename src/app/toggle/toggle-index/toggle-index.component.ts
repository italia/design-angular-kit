import { Component, ChangeDetectionStrategy } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'it-toggle-index',
  templateUrl: './toggle-index.component.html',
  styleUrls: ['./toggle-index.component.scss'],
  standalone: false,
})
export class ToggleIndexComponent {
  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find((component: any) => component.name === 'ItCheckboxComponent');
  }
}
