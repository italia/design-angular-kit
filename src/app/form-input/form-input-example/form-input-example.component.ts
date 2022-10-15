import { Component, ViewChild, ContentChild } from '@angular/core';

@Component({
  selector: 'it-form-input-example',
  templateUrl: './form-input-example.component.html',
  styleUrls: ['./form-input-example.component.scss']
})
export class FormInputExampleComponent {
  i = 0;
  readOnly = false;
  disabled = false;
  type = 'text';
  icon = 'it-pencil';
  value = 'myNgModel';

  get placeholder() {
    return this.hasPlaceholder ? 'Testo di esempio' : '';
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
  private _hasPlaceholder = true;

  get hasLabel(): boolean {
    return this._hasLabel;
  }
  set hasLabel(value: boolean) {
    this._hasLabel = value;
  }
  private _hasLabel = true;

  get hasNote(): boolean {
    return this._hasNote;
  }
  set hasNote(value: boolean) {
    this._hasNote = value;
  }
  private _hasNote = false;

  get autoCompleteData(): Array<string> {
    return this._autoCompleteData;
  }
  set autoCompleteData(value: Array<string>) {
    this._autoCompleteData = value.map(string => string.trim());
  }
  private _autoCompleteData = ['prova', 'TeSt', 'l\'esempio'];

}
