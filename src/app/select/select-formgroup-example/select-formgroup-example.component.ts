import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { SelectControlOption } from 'design-angular-kit/interfaces/form';

@Component({
  selector: 'it-select-formgroup-example',
  templateUrl: './select-formgroup-example.component.html',
  standalone: false,
})
export class SelectFormgroupExampleComponent {
  private _fb = inject(FormBuilder);

  myForm: FormGroup;

  options: Array<SelectControlOption> = [{ value: null, text: 'Seleziona un elemento', selected: true }];

  constructor() {
    this.myForm = this._fb.group({
      select: [null, Validators.required],
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
