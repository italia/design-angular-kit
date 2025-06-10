import { Component } from '@angular/core';
import { DimmerColor } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-dimmer-primary',
  templateUrl: './dimmer-primary.component.html',
  standalone: false,
})
export class DimmerPrimaryComponent {
  text =
    'Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus. Nulla vulputate luctus sem, eu maximus lacus faucibus eget. Fusce tristique enim augue, sed suscipit lorem bibendum vel. Donec vehicula vehicula nibh non suscipit.';
  active = false;
  color: DimmerColor = 'dimmer-primary';
}
