import { Component } from '@angular/core';
import { ItPopoverConfig } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-popover-config-example',
  templateUrl: './popover-config-example.component.html',
  styleUrls: ['./popover-config-example.component.scss']
})
export class PopoverConfigExampleComponent {

  constructor(popoverConfig: ItPopoverConfig) {
    popoverConfig.triggers = 'focus';
    popoverConfig.container = 'body';
    popoverConfig.placement = 'left';
  }

}
