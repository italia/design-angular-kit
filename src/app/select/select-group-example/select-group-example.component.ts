import { Component } from '@angular/core';
import { SelectControlGroup, SelectControlOption } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-select-group-example',
  templateUrl: './select-group-example.component.html',
  styleUrls: ['./select-group-example.component.scss'],
  standalone: false,
})
export class SelectGroupExampleComponent {
  selectedValue: number | string = '';
  selectOptions: Array<SelectControlOption> = [
    {
      selected: true,
      value: '',
      text: "Scegli un'opzione",
    },
  ];
  selectGroups: Array<SelectControlGroup> = [
    {
      label: 'Gruppo 1',
      options: [
        {
          value: 1,
          text: 'Opzione 1',
        },
        {
          value: 2,
          text: 'Opzione 2',
        },
      ],
    },
    {
      label: 'Gruppo 2',
      options: [
        {
          value: 3,
          text: 'Opzione 3',
        },
        {
          value: 4,
          text: 'Opzione 4',
        },
      ],
    },
  ];

  constructor() {}
}
