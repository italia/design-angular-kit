import { Component } from '@angular/core';
import { CalloutAppearance, CalloutColor, IconName } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-hightlights-important',
  templateUrl: './hightlights-important.component.html'
})
export class HightlightsImportantComponent {

  appearance: CalloutAppearance = 'highlight';
  label = 'Importante';
  icon: IconName = 'info-circle';
  color: CalloutColor = 'important';

}
