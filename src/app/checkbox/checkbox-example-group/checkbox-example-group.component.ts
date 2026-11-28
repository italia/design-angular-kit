import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-checkbox-example-group',
  templateUrl: './checkbox-example-group.component.html',
  styleUrls: ['./checkbox-example-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class CheckboxExampleGroupComponent {
  checked = true;
  label = 'Sono una checkbox';
  disabled = false;
  indeterminate = false;
}
