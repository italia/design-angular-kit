import { Component, OnInit } from '@angular/core';
import { SelectControlOption } from 'design-angular-kit';

@Component({
  selector: 'it-select-example',
  templateUrl: './select-example.component.html',
  styleUrls: ['./select-example.component.scss']
})
export class SelectExampleComponent {
  selectedValue: number = 1;
  selectOptions: Array<SelectControlOption> = [
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
  
  constructor(){}
}
