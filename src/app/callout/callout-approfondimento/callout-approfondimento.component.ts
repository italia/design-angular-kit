import { Component } from '@angular/core';
import { CalloutAppearance, CalloutColor } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-callout-approfondimento',
  templateUrl: './callout-approfondimento.component.html',
  standalone: false,
})
export class CalloutApprofondimentoComponent {
  color: CalloutColor = 'note';
  label = 'Approfondimento';
  appearance: CalloutAppearance = 'more';
}
