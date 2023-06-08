import { Component } from '@angular/core';
import { SelectControlOption } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-select-example',
  templateUrl: './select-example.component.html',
  styleUrls: ['./select-example.component.scss']
})
export class SelectExampleComponent {
  selectedValue: number = null;
  selectOptions: Array<SelectControlOption> = [
    { value: null, text: 'Seleziona un elemento', selected: true, disabled: true },
    {
      value: 1,
      text: 'Opzione 1'
    },
    {
      value: 2,
      text: 'Opzione 2'
    },
    {
      value: 3,
      text: 'Opzione 3'
    }
  ];

}
