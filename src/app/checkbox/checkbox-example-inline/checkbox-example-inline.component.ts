import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-checkbox-example-inline',
  templateUrl: './checkbox-example-inline.component.html',
  styleUrls: ['./checkbox-example-inline.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class CheckboxExampleInlineComponent {
  checked = true;
  label = 'Sono una checkbox';
  disabled = false;
  indeterminate = false;
}
