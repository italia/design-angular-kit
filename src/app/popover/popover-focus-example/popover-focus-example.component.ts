import { Component, OnInit } from '@angular/core';
import { PopoverDirective } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-popover-focus-example',
  templateUrl: './popover-focus-example.component.html',
  styleUrls: ['./popover-focus-example.component.scss']
})
export class PopoverFocusExampleComponent {
  popoverTrigger = 'focus';
  previousTrigger = 'click';

  toggleTrigger() {
    this.popoverTrigger = (this.popoverTrigger === 'click') ? 'focus' : 'click';
    this.previousTrigger = (this.popoverTrigger === 'click') ? 'focus' : 'click';
  }
}
