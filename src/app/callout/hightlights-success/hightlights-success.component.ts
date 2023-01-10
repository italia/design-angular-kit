import { Component } from '@angular/core';
import { CalloutAppearance, CalloutColor, IconName } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-hightlights-success',
  templateUrl: './hightlights-success.component.html'
})
export class HightlightsSuccessComponent {

  appearance: CalloutAppearance = 'highlight';
  label = 'Usa';
  icon: IconName = 'check-circle';
  color: CalloutColor = 'success';

}
