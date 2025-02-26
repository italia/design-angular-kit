import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItModalComponent } from 'design-angular-kit/components/core/modal/modal.component';

@Component({
  selector: 'it-modal-radio-example',
  templateUrl: './modal-radio-example.component.html',
  standalone: false,
})
export class ModalRadioExampleComponent {
  formGroup: FormGroup;

  @ViewChild('radioModal') radioModal: ItModalComponent;

  constructor(private readonly formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      radio: [null, Validators.required],
    });
  }

  submit(): void {
    this.radioModal.hide();
  }
}
