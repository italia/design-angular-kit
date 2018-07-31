import { Component } from '@angular/core';
import { PopoverConfig } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-popover-config-example',
  templateUrl: './popover-config-example.component.html',
  styleUrls: ['./popover-config-example.component.scss'],
  providers: [PopoverConfig]
})
export class PopoverConfigExampleComponent {

  constructor(popoverConfig: PopoverConfig) {
    popoverConfig.triggers = 'focus';
    popoverConfig.container = 'body';
    popoverConfig.placement = 'left';
  }

}
