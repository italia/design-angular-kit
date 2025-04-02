import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutocompleteRoutingModule } from './autocomplete-routing.module';
import { AutocompleteExampleComponent } from './autocomplete-example/autocomplete-example.component';
import { AutocompleteExamplesComponent } from './autocomplete-examples/autocomplete-examples.component';
import { AutocompleteIndexComponent } from './autocomplete-index/autocomplete-index.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, SharedModule, AutocompleteRoutingModule],
  declarations: [AutocompleteIndexComponent, AutocompleteExampleComponent, AutocompleteExamplesComponent],
})
export class AutocompleteModule {}
