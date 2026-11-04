import { Component, ChangeDetectionStrategy } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'it-progress-bar-index',
  templateUrl: './progress-bar-index.component.html',
  styleUrls: ['./progress-bar-index.component.scss'],
  standalone: false,
})
export class ProgressBarIndexComponent {
  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find((component: any) => component.name === 'ItProgressBarComponent');
  }
}
