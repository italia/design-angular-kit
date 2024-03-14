import { Component } from '@angular/core';
import { CalloutAppearance, CalloutColor } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-hightlights-success',
  templateUrl: './hightlights-success.component.html',
})
export class HightlightsSuccessComponent {
  appearance: CalloutAppearance = 'highlight';
  label = 'Usa';
  color: CalloutColor = 'success';
}
