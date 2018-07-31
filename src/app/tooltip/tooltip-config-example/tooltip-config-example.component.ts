import { Component } from '@angular/core';
import { TooltipConfig } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-tooltip-config-example',
  templateUrl: './tooltip-config-example.component.html',
  styleUrls: ['./tooltip-config-example.component.scss'],
  providers: [TooltipConfig]
})
export class TooltipConfigExampleComponent {

  constructor(tooltipConfig: TooltipConfig) {
    tooltipConfig.container = 'body';
    tooltipConfig.placement = 'left';
  }

}
