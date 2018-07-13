import { Component, OnInit } from '@angular/core';
import { Placement } from 'projects/design-angular-kit/src/lib/popover/positioning';

@Component({
  selector: 'it-popover-example',
  templateUrl: './popover-example.component.html',
  styleUrls: ['./popover-example.component.scss']
})
export class PopoverExampleComponent implements OnInit {
  currentPlacement: Placement = 'right';

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

  constructor() { }

  ngOnInit() {
  }

  changeCurrentPlacement() {
    switch (this.currentPlacement) {
      case 'right':
        this.currentPlacement = 'top';
        break;
      case 'top':
        this.currentPlacement = 'left';
        break;
      case 'left':
        this.currentPlacement = 'bottom';
        break;
      case 'bottom':
        this.currentPlacement = 'right';
        break;
    }
  }
}
