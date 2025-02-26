import { Component } from '@angular/core';
import { CalloutAppearance, CalloutColor } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-hightlights-warning',
  templateUrl: './hightlights-warning.component.html',
  standalone: false,
})
export class HightlightsWarningComponent {
  appearance: CalloutAppearance = 'highlight';
  label = 'Attenzione';
  color: CalloutColor = 'warning';
}
