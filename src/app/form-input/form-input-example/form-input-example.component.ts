import { Component } from '@angular/core';

@Component({
  selector: 'it-form-input-example',
  templateUrl: './form-input-example.component.html',
  styleUrls: ['./form-input-example.component.scss']
})
export class FormInputExampleComponent {

  readOnly = false;
  disabled = false;
  type = 'text';
  icon = 'it-favorite';
  note = '';

  get hasNote(): boolean {
    return this._hasNote;
  }
  set hasNote(value: boolean) {
    this._hasNote = value;

    if (this._hasNote) {
      this.note = 'Esempio di input';
    } else {
      this.note = '';
    }
  }
  private _hasNote = false;
}
