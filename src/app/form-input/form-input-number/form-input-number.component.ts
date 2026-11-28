import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-form-input-number-example',
  templateUrl: './form-input-number.component.html',
  styleUrls: ['./form-input-number.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class FormInputNumberExampleComponent {
  adaptiveInputValue: number = 99999;
}
