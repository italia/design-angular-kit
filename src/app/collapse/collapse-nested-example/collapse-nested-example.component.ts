import { Component } from '@angular/core';

@Component({
  selector: 'it-collapse-nested-example',
  templateUrl: './collapse-nested-example.component.html',
  styleUrls: ['./collapse-nested-example.component.scss']
})
export class CollapseNestedExampleComponent {

  shownComponent = '';
  hiddenComponent = '';


  logShown($event) {
    this.shownComponent = $event._header;
  }

  logHidden($event) {
    this.hiddenComponent = $event._header;
  }
}
