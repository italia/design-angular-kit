import { Component } from '@angular/core';
import { Placement } from 'projects/design-angular-kit/src/lib/popover/positioning';

@Component({
  selector: 'it-popover-placements-example',
  templateUrl: './popover-placements-example.component.html',
  styleUrls: ['./popover-placements-example.component.scss']
})
export class PopoverPlacementsExampleComponent {

  currentPlacement: Placement = 'right';

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
