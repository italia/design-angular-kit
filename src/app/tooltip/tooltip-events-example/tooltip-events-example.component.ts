import { Component } from '@angular/core';

@Component({
  selector: 'it-tooltip-events-example',
  templateUrl: './tooltip-events-example.component.html',
  styleUrls: ['./tooltip-events-example.component.scss'],
})
export class TooltipEventsExampleComponent {
  showTime = '';
  shownTime = '';
  insertedTime = '';
  hideTime = '';
  hiddenTime = '';

  logShow() {
    this.showTime = new Date().toISOString();
  }

  logShown() {
    this.shownTime = new Date().toISOString();
  }

  logInserted() {
    this.insertedTime = new Date().toISOString();
  }

  logHide() {
    this.hideTime = new Date().toISOString();
  }

  logHidden() {
    this.hiddenTime = new Date().toISOString();
  }
}
