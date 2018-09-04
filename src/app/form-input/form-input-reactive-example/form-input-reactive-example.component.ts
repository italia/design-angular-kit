import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'it-form-input-reactive-example',
  templateUrl: './form-input-reactive-example.component.html',
  styleUrls: ['./form-input-reactive-example.component.scss']
})
export class FormInputReactiveExampleComponent implements OnInit {
  private _hasPlaceholder = true;
  private _hasLabel = true;
  private _hasNote = false;

  formGroup: FormGroup;
  i = 0;
  readOnly = false;
  disabled = false;
  type = 'password';
  icon = 'it-favorite';
  isValid = false;

  get placeholder() {
    return this.hasPlaceholder ? this.type : '';
  }

  get label() {
    return this.hasLabel ? 'Label dell\'input' : '';
  }

  get note() {
    return this.hasNote ? 'non condivideremo mai i tuoi dati' : '';
  }

  get hasPlaceholder(): boolean {
    return this._hasPlaceholder;
  }
  set hasPlaceholder(value: boolean) {
    this._hasPlaceholder = value;
  }

  get hasLabel(): boolean {
    return this._hasLabel;
  }
  set hasLabel(value: boolean) {
    this._hasLabel = value;
  }

  get hasNote(): boolean {
    return this._hasNote;
  }
  set hasNote(value: boolean) {
    this._hasNote = value;
  }

  constructor(private _fb: FormBuilder) {
    this.formGroup = this._fb.group({
      value: ['myNgModel', [Validators.minLength(8), Validators.required]]
    });
    this.formGroup.valueChanges.subscribe(_ => {
      this._validateControls();
    });
  }

  ngOnInit() {
    this._validateControls();
  }

  private _validateControls() {
    const controls = this.formGroup.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        this.isValid = false;
      } else {
        this.isValid = true;
      }
    }
  }

}
