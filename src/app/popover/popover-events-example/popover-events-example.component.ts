import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'it-popover-events-example',
  templateUrl: './popover-events-example.component.html',
  styleUrls: ['./popover-events-example.component.scss']
})
export class PopoverEventsExampleComponent {

  showTime = '';
  shownTime = '';
  insertedTime = '';
  hideTime = '';
  hiddenTime = '';

  logShow() {
    this.showTime = (new Date()).toISOString();
  }

  logShown() {
    this.shownTime = (new Date()).toISOString();
  }

  logInserted() {
    this.insertedTime = (new Date()).toISOString();
  }

  logHide() {
    this.hideTime = (new Date()).toISOString();
  }

  logHidden() {
    this.hiddenTime = (new Date()).toISOString();
  }

}
