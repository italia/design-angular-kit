import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'it-radio-example',
  templateUrl: './radio-example.component.html',
  styleUrls: ['./radio-example.component.scss']
})
export class RadioExampleComponent implements OnInit {

  colors = [
    'Rosso',
    'Blu',
    'Giallo'
  ];

  selectedColor = 'Blu';

  disabled = false;


  genderFormGroup: FormGroup;

  constructor(private _fb: FormBuilder){}

  ngOnInit(): void {
      this.genderFormGroup = this._fb.group({
        gender: ['MALE']
      });
  }
}
