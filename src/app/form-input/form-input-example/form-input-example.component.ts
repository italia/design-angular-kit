import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AutocompleteItem, InputControlType } from 'projects/design-angular-kit/src/public_api';

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
  type: InputControlType | 'password' = 'search';
  icon = 'pencil';
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

  hasPlaceholder = true;

  hasLabel = true;

  hasNote = false;

   get autoCompleteData(): AutocompleteItem[] {
     return this._autoCompleteData;
  }
  set autoCompleteData(value: AutocompleteItem[]) {
     this._autoCompleteData = value;
  }
   private _autoCompleteData: AutocompleteItem[] = [
     {
       value: 'Luisa Neri',
       avatarSrcPath: 'https://randomuser.me/api/portraits/women/44.jpg',
       avatarAltText: 'Luisa Neri',
       label: 'Profilo'
     },
     {
       value: 'Cristian Borelli',
       avatarSrcPath: 'https://randomuser.me/api/portraits/men/1.jpg',
       avatarAltText: 'Cristian Borelli',
       label: 'Profilo'
     },
     {
       value: 'Andrea Stagi',
       avatarSrcPath: 'https://randomuser.me/api/portraits/men/2.jpg',
       avatarAltText: 'Andrea Stagi',
       label: 'Profilo'
     },
     {
       value: 'Comune di Firenze',
       icon: 'pa',
       link: 'https:www.comune.fi.it/',
       label: 'Comune'
     },
     {
       value: 'Italia',
       avatarSrcPath: 'https:raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/it.svg',
       avatarAltText: 'Italia'
     }
   ];

}
