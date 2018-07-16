import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'it-popover-container-example',
  templateUrl: './popover-container-example.component.html',
  styleUrls: ['./popover-container-example.component.scss']
})
export class PopoverContainerExampleComponent {

  currentContainer = '';

  toggleContainer() {
    this.currentContainer = (this.currentContainer === 'body') ? '' : 'body';
  }

}
