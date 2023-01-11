import { Component } from '@angular/core';
import { CalloutAppearance, CalloutColor } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-hightlights-danger',
  templateUrl: './hightlights-danger.component.html'
})
export class HightlightsDangerComponent {

  appearance: CalloutAppearance = 'highlight';
  label = 'Non usare';
  color: CalloutColor = 'danger';

}
