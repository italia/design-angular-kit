import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AutoCompleteItem } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-form-input-example',
  templateUrl: './form-input-example.component.html',
  styleUrls: ['./form-input-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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

  get autoCompleteData(): AutoCompleteItem[] {
    return this._autoCompleteData;
  }
  set autoCompleteData(value: AutoCompleteItem[]) {
    this._autoCompleteData = value;
  }
  private _autoCompleteData: AutoCompleteItem[] = [
    {
      value: 'Luisa Neri',
      avatarSrcPath: 'https://randomuser.me/api/portraits/women/44.jpg',
      avatarAltText: 'Luisa Neri'
    }, 
    {
      value: 'Cristian Borelli',
      avatarSrcPath: 'https://randomuser.me/api/portraits/men/1.jpg',
      avatarAltText: 'Cristian Borelli'
    },
    {
      value: 'Andrea Stagi',
      avatarSrcPath: 'https://randomuser.me/api/portraits/men/2.jpg',
      avatarAltText: 'Andrea Stagi'
    },
    {
      value: 'Comune di Firenze',
      icon: 'it-pa',
      link: 'https://www.comune.fi.it/'
    },
    {
      value: 'Italia',
      avatarSrcPath: 'https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/it.svg',
      avatarAltText: 'Italia'
    }
  ];

}
