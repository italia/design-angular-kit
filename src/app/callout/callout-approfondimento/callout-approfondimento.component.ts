import { Component } from '@angular/core';
import { CalloutAppearance, CalloutColor, IconName } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-callout-approfondimento',
  templateUrl: './callout-approfondimento.component.html'
})
export class CalloutApprofondimentoComponent {

  color: CalloutColor = 'note';
  label = 'Approfondimento';
  icon: IconName = 'zoom-in';
  appearance: CalloutAppearance = 'more';
}
