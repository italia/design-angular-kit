import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DimmerColor } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-dimmer-primary-one-button',
  templateUrl: './dimmer-primary-one-button.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class DimmerPrimaryOneButtonComponent {
  active = false;
  color: DimmerColor = 'dimmer-primary';
  title = 'Titolo Dimmer';
}
