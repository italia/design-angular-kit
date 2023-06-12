import { Component } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { SelectControlOption } from '../../../../projects/design-angular-kit/src/lib/interfaces/form';

@Component({
  selector: 'it-select-formgroup-example',
  templateUrl: './select-formgroup-example.component.html'
})
export class SelectFormgroupExampleComponent {
  myForm: FormGroup;

  options: Array<SelectControlOption> = [
    { value: null, text: 'Seleziona un elemento', selected: true }
  ];

  constructor(private _fb: FormBuilder) {
    this.myForm = this._fb.group({
      select: [null, Validators.required]
    });

    Array.from(Array(10).keys()).forEach(number => {
      this.options.push({ value: number, text: `Opzione ${number.toString()}` });
    });
  }

  value = '';
  savedValue = undefined;

  save(form: UntypedFormGroup) {
    this.savedValue = form.value.select;
  }

  markAllAsTouched() {
    this.myForm.markAllAsTouched();
  }
}
