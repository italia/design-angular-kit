import { Component } from '@angular/core';
import { CalloutColor, IconName } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-callout-success',
  templateUrl: './callout-success.component.html'
})
export class CalloutSuccessComponent {

  text = 'Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum varius.';
  icon: IconName = 'check-circle';
  label = 'Usa';
  color: CalloutColor = 'success';

}
