import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from '../../../../projects/design-angular-kit/src/lib/components/core/modal/modal.component';

@Component({
  selector: 'it-modal-radio-example',
  templateUrl: './modal-radio-example.component.html'
})
export class ModalRadioExampleComponent {

  formGroup: FormGroup;

  @ViewChild('radioModal') radioModal: ModalComponent;

  constructor(
    private readonly formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      radio: [null, Validators.required]
    });
  }

  submit(): void {
    this.radioModal.hide();
  }
}
