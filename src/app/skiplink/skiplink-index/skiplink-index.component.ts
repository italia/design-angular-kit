import { Component, ChangeDetectionStrategy } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'it-skiplink-index',
  templateUrl: './skiplink-index.component.html',
  standalone: false,
})
export class SkiplinkIndexComponent {
  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find((component: any) => component.name === 'ItSkiplinkComponent');
  }
}
