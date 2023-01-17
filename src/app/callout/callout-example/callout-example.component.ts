import { Component } from '@angular/core';
import { IconName, IconSize } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-callout-example',
  templateUrl: './callout-example.component.html'
})
export class CalloutExampleComponent {

  text = 'Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum varius.';
  icon: IconName = 'info-circle';
  label = 'Titolo callout';
  hiddenLabel = 'Confermato';

}
