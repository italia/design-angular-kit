import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AutoCompleteItem } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-select-reactive-form-example',
  templateUrl: './select-reactive-form-example.component.html',
  styleUrls: ['./select-reactive-form-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectReactiveFormExampleComponent {
  selectValue = '2';
  selectFormGroup = new FormGroup({
    selectFormControl: new FormControl('2')
  });
}
