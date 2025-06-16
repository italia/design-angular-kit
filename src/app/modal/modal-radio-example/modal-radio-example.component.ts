import { Component, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItModalComponent } from 'design-angular-kit/components/core/modal/modal.component';

@Component({
  selector: 'it-modal-radio-example',
  templateUrl: './modal-radio-example.component.html',
  standalone: false,
})
export class ModalRadioExampleComponent {
  private readonly formBuilder = inject(FormBuilder);

  formGroup: FormGroup;

  @ViewChild('radioModal') radioModal: ItModalComponent;

  constructor() {
    this.formGroup = this.formBuilder.group({
      radio: [null, Validators.required],
    });
  }

  submit(): void {
    this.radioModal.hide();
  }
}
