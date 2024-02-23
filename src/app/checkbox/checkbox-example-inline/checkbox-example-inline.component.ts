import { Component } from '@angular/core';

@Component({
  selector: 'it-checkbox-example-inline',
  templateUrl: './checkbox-example-inline.component.html',
  styleUrls: ['./checkbox-example-inline.component.scss'],
})
export class CheckboxExampleInlineComponent {
  checked = true;
  label = 'Sono una checkbox';
  disabled = false;
  indeterminate = false;
}
