import { Component } from '@angular/core';

@Component({
  selector: 'it-steppers-dynamic-example',
  templateUrl: './steppers-dynamic-example.component.html'
})
export class SteppersDynamicExampleComponent {

  /**
   * Step index
   */
  activeStep = 1;
  steps = ['Primo contenuto', 'Secondo contenuto', 'Terzo contenuto']

  isDark = false;

  isConfirmLoading = false;
  isSaveLoading = false;

  onForwardClick(activeStep: number): void {
    if (activeStep < this.steps.length - 1) {
      this.activeStep++;
    }
    this.isConfirmLoading = false;
    this.isSaveLoading = false;
  }
  onBackClick(activeStep: number): void {
    if (activeStep > 0) {
      this.activeStep--;
    }
    this.isConfirmLoading = false;
    this.isSaveLoading = false;
  }

  onConfirmClick(activeStep: number): void {
    this.isConfirmLoading = true;
  }

  onSaveClick(activeStep: number): void {
    this.isSaveLoading = true;
  }

}
