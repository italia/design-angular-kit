import { Component } from '@angular/core';
import { ElementPlacement } from 'design-angular-kit/interfaces/core';

@Component({
  selector: 'it-tooltip-placements-example',
  templateUrl: './tooltip-placements-example.component.html',
  styleUrls: ['./tooltip-placements-example.component.scss'],
})
export class TooltipPlacementsExampleComponent {
  currentPlacement: ElementPlacement = 'right';

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
