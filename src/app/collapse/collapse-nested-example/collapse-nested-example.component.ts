import { Component } from '@angular/core';

@Component({
  selector: 'it-collapse-nested-example',
  templateUrl: './collapse-nested-example.component.html',
  styleUrls: ['./collapse-nested-example.component.scss']
})
export class CollapseNestedExampleComponent {

  showComponent = '';
  shownComponent = '';
  hideComponent = '';
  hiddenComponent = '';

  logShow($event) {
    this.showComponent = $event._header;
  }

  logShown($event) {
    this.shownComponent = $event._header;
  }

  logHide($event) {
    this.hideComponent = $event._header;
  }

  logHidden($event) {
    this.hiddenComponent = $event._header;
  }
}
