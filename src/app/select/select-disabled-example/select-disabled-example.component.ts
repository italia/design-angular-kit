import { Component } from '@angular/core';
import { SelectControlOption } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-select-disabled-example',
  templateUrl: './select-disabled-example.component.html',
  styleUrls: ['./select-disabled-example.component.scss'],
})
export class SelectDisabledExampleComponent {
  selectOptions: Array<SelectControlOption> = [
    {
      selected: true,
      value: '',
      text: "Scegli un'opzione",
    },
    {
      value: 1,
      text: 'Opzione 1',
    },
    {
      value: 2,
      text: 'Opzione 2',
    },
    {
      value: 3,
      text: 'Opzione 3',
    },
  ];

  constructor() {}
}
