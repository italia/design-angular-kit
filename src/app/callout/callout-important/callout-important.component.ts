import { Component } from '@angular/core';
import { CalloutColor, IconName } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-callout-important',
  templateUrl: './callout-important.component.html'
})
export class CalloutImportantComponent {

  text = 'Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum varius.';
  icon: IconName = 'info-circle';
  label = 'Importante';
  color: CalloutColor = 'important';

}
