import { Component } from '@angular/core';

@Component({
  selector: 'it-autocomplete-double',
  templateUrl: './autocomplete-double.component.html',
  styleUrls: ['./autocomplete-double.component.scss'],
  standalone: false,
})
export class AutocompleteDoubleComponent {
  categories = ['Frutta', 'Verdura'];

  store = {
    Frutta: ['Mela', 'Pera', 'Melone', 'Banana'],
    Verdura: ['Carota', 'Zucchina', 'Melanzana', 'Carciofo'],
  };

  selectedCategory: string = null;

  changeCategory(value: string) {
    this.selectedCategory = value;
  }

  source = (query: string, populateResults: (results: string[]) => void) => {
    const results = this.store[this.selectedCategory];
    const filteredResults = results.filter(result => result.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    populateResults(filteredResults);
  };
}
