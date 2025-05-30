import { Component } from '@angular/core';
import { CalloutColor } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-callout-warning',
  templateUrl: './callout-warning.component.html',
  standalone: false,
})
export class CalloutWarningComponent {
  text =
    'Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum varius.';
  label = 'Attenzione';
  color: CalloutColor = 'warning';
}
