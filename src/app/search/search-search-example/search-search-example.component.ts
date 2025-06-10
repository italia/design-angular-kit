import { Component } from '@angular/core';
import { SearchItem } from 'design-angular-kit/interfaces/form';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'it-search-search-example',
  templateUrl: './search-search-example.component.html',
  standalone: false,
})
export class SearchSearchExampleComponent {
  private _autoCompleteData: SearchItem[] = [
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
   * Dynamic SearchData (API) accepted by it-input
   * @param search the search input string
   */
  searchUsers$ = (search?: string): Observable<Array<SearchItem>> => {
    if (!search) {
      return of([]);
    }

    // API request for retrieve data, use `search` to filter data
    return of(this._autoCompleteData);
  };

  onSearchSelected(item: SearchItem): void {
    console.log(item);
  }
}
