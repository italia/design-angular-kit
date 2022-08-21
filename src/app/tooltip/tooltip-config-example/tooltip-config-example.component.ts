import { Component } from '@angular/core';
import { ItTooltipConfig } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-tooltip-config-example',
  templateUrl: './tooltip-config-example.component.html',
  styleUrls: ['./tooltip-config-example.component.scss'],
  providers: [ItTooltipConfig]
})
export class TooltipConfigExampleComponent {

  constructor(tooltipConfig: ItTooltipConfig) {
    tooltipConfig.container = 'body';
    tooltipConfig.placement = 'left';
    tooltipConfig.triggers = 'click';
  }

}
