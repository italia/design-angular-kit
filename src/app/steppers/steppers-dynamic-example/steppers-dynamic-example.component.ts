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

  onForwardClick(activeStep: number): void {
    if (activeStep < this.steps.length - 1) {
      this.activeStep++;
    }
  }
  onBackClick(activeStep: number): void {
    if (activeStep > 0) {
      this.activeStep--;
    }
  }

  onConfirmClick(activeStep: number): void {
    console.log('Stepper is completed');
  }

  onSaveClick(activeStep: number): void {
    console.log('Stepper is saved');
  }

}
