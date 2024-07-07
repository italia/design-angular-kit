import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-timeline-index',
  templateUrl: './timeline-index.component.html',
})
export class TimelineIndexComponent {
  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'ItTimelineContainerComponent');
  }
}
