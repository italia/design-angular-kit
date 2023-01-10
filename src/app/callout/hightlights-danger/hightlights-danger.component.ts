import { Component } from '@angular/core';
import { CalloutAppearance, CalloutColor, IconName } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-hightlights-danger',
  templateUrl: './hightlights-danger.component.html'
})
export class HightlightsDangerComponent {

  appearance: CalloutAppearance = 'highlight';
  label = 'Non usare';
  icon: IconName = 'close-circle';
  color: CalloutColor = 'danger';

}
