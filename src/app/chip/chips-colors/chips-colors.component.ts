import { Component } from '@angular/core';
import { ChipColor } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-chips-colors',
  templateUrl: './chips-colors.component.html',
  standalone: false,
})
export class ChipsColorsComponent {
  primary: ChipColor = 'primary';
  secondary: ChipColor = 'secondary';
  warning: ChipColor = 'warning';
  danger: ChipColor = 'danger';
  success: ChipColor = 'success';

  size: '' | 'lg' = 'lg';
}
