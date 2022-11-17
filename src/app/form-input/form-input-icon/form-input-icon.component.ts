import { Component } from '@angular/core';

@Component({
  selector: 'it-form-input-icon-example',
  templateUrl: './form-input-icon.component.html',
  styleUrls: ['./form-input-icon.component.scss']
})
export class FormInputIconExampleComponent {
  i = 0;
  type = 'text';
  icon = 'it-pencil';
  value = '';
  label = "Etichetta di esempio";
}
