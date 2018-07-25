import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'it-radio-example',
  templateUrl: './radio-example.component.html',
  styleUrls: ['./radio-example.component.scss']
})
export class RadioExampleComponent {

  colors = [
    'Rosso',
    'Blu',
    'Giallo'
  ];

  selectedColor = 'Blu';

  disabled = false;

}
