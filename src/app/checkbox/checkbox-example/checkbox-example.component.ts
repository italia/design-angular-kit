import { Component } from '@angular/core';

@Component({
  selector: 'it-checkbox-example',
  templateUrl: './checkbox-example.component.html',
  styleUrls: ['./checkbox-example.component.scss']
})
export class CheckboxExampleComponent {

  checked = true;
  label = 'Sono una checkbox';
  disabled = false;

}
