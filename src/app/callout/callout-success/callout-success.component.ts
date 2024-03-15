import { Component } from '@angular/core';
import { CalloutColor } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-callout-success',
  templateUrl: './callout-success.component.html',
})
export class CalloutSuccessComponent {
  text =
    'Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum varius.';
  label = 'Usa';
  color: CalloutColor = 'success';
}
