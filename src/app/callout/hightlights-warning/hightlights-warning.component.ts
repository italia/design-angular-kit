import { Component } from '@angular/core';
import { CalloutAppearance, CalloutColor, IconName } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-hightlights-warning',
  templateUrl: './hightlights-warning.component.html'
})
export class HightlightsWarningComponent {

  appearance: CalloutAppearance = 'highlight';
  label = 'Attenzione';
  icon: IconName = 'help-circle';
  color: CalloutColor = 'warning';

}
