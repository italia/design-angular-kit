import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'it-template-driven-validation-example',
  templateUrl: './template-driven-validation-example.component.html',
  styleUrls: ['./template-driven-validation-example.component.scss']
})
export class TemplateDrivenValidationExampleComponent {
  value = '';
  savedValue = undefined;

  save(ngForm: NgForm) {
    this.savedValue = ngForm.value.myInput;
  }
}
