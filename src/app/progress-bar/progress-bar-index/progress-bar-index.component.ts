import { Component, OnInit } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-progress-bar-index',
  templateUrl: './progress-bar-index.component.html',
  styleUrls: ['./progress-bar-index.component.scss']
})
export class ProgressBarIndexComponent {

  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'ItProgressBarComponent');
  }


}
