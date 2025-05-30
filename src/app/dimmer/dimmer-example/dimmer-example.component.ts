import { Component } from '@angular/core';
import { IconName, IconSize } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-dimmer-example',
  templateUrl: './dimmer-example.component.html',
  standalone: false,
})
export class DimmerExampleComponent {
  text =
    'Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.';
  icon: IconName = 'unlocked';
  size: IconSize = 'xl';
  active = false;
}
