import { Component } from '@angular/core';
import { AutocompleteItem } from 'design-angular-kit/interfaces/form';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'it-form-autocomplete-example',
  templateUrl: './form-autocomplete-example.component.html',
})
export class FormAutocompleteExampleComponent {
  private _autoCompleteData: AutocompleteItem[] = [
    {
      value: 'Luisa Neri',
      avatarSrcPath: 'https://randomuser.me/api/portraits/women/44.jpg',
      avatarAltText: 'Luisa Neri',
      label: 'Profilo',
    },
    {
      value: 'Cristian Borelli',
      avatarSrcPath: 'https://randomuser.me/api/portraits/men/1.jpg',
      avatarAltText: 'Cristian Borelli',
      label: 'Profilo',
    },
    {
      value: 'Andrea Stagi',
      avatarSrcPath: 'https://randomuser.me/api/portraits/men/2.jpg',
      avatarAltText: 'Andrea Stagi',
      label: 'Profilo',
    },
    {
      value: 'Comune di Firenze',
      icon: 'pa',
      link: 'https:www.comune.fi.it/',
      label: 'Comune',
    },
    {
      value: 'Italia',
      avatarSrcPath: 'https:raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/it.svg',
      avatarAltText: 'Italia',
    },
  ];

  /**
   * Dynamic AutocompleteData (API) accepted by it-input
   * @param search the autocomplete input string
   */
  autocompleteUsers$ = (search?: string): Observable<Array<AutocompleteItem>> => {
    if (!search) {
      return of([]);
    }

    // API request for retrieve data, use `search` to filter data
    return of(this._autoCompleteData);
  };

  onAutocompleteSelected(item: AutocompleteItem): void {
    console.log(item);
  }
}
