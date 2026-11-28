import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CalloutColor } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-callout-danger',
  templateUrl: './callout-danger.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class CalloutDangerComponent {
  text =
    'Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum varius.';
  label = 'Non usare';
  color: CalloutColor = 'danger';
}
