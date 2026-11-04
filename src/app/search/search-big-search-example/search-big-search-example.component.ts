import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SearchSearchExampleComponent } from '../search-search-example/search-search-example.component';

@Component({
  selector: 'it-search-big-search-example',
  templateUrl: './search-big-search-example.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class SearchBigSearchExampleComponent extends SearchSearchExampleComponent {}
