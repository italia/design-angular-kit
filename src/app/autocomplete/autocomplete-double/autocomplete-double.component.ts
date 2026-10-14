import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'it-autocomplete-double',
  templateUrl: './autocomplete-double.component.html',
  styleUrls: ['./autocomplete-double.component.scss'],
  standalone: false,
})
export class AutocompleteDoubleComponent {
  categories = ['Frutta', 'Verdura'];

  store: Record<string, string[]> = {
    Frutta: ['Mela', 'Pera', 'Melone', 'Banana'],
    Verdura: ['Carota', 'Zucchina', 'Melanzana', 'Carciofo'],
  };

  selectedCategory: string = '';

  changeCategory(value: string) {
    this.selectedCategory = value;
  }

  source = (query: string, populateResults: (results: string[]) => void) => {
    const results = this.store[this.selectedCategory] ?? [];
    const filteredResults = results.filter((result: string) => result.toLowerCase().includes(query.toLowerCase()));
    populateResults(filteredResults);
  };
}
