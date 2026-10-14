import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-checkbox-example',
  templateUrl: './checkbox-example.component.html',
  styleUrls: ['./checkbox-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class CheckboxExampleComponent {
  checked = true;
  disabled = false;
  indeterminate = false;
  link = false;
}
