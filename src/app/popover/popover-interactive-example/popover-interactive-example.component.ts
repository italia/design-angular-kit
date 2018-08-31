import { Component } from '@angular/core';

@Component({
  selector: 'it-popover-interactive-example',
  templateUrl: './popover-interactive-example.component.html',
  styleUrls: ['./popover-interactive-example.component.scss']
})
export class PopoverInteractiveExampleComponent {
  trigger = 'click';
  placement = 'right';
  container = '';
  disabled = false;
  removeTitle = false;

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

  get myDescription() {
    return !this.removeTitle ? 'Testo del Popover' : 'Popover senza nessun titolo';
  }

  get myTitle() {
    return !this.removeTitle ? 'Titolo del Popover' : '';
  }

}
