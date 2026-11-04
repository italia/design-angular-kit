import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'it-radio-example',
  templateUrl: './radio-example.component.html',
  styleUrls: ['./radio-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class RadioExampleComponent implements OnInit {
  private _fb = inject(FormBuilder);

  colors = ['Rosso', 'Blu', 'Giallo'];

  selectedColor = 'Blu';

  disabled = false;

  link?: string;

  genderFormGroup!: FormGroup;

  ngOnInit(): void {
    this.genderFormGroup = this._fb.group({
      gender: ['MALE'],
    });
  }
}
