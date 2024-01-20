import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutocompleteRoutingModule } from './autocomplete-routing.module';
import { AutocompleteIndexComponent } from './autocomplete-index/autocomplete-index.component';
import { ItTabContainerComponent } from 'design-angular-kit/components/core/tab/tab-container/tab-container.component';
import { ItTabItemComponent } from 'design-angular-kit/components/core/tab/tab-item/tab-item.component';
import { SharedModule } from '../shared/shared.module';
import { AutocompleteExamplesComponent } from './autocomplete-examples/autocomplete-examples.component';
import { AutocompleteSearchExampleComponent } from './autocomplete-search-example/autocomplete-search-example.component';
import { AutocompleteBigSearchExampleComponent } from './autocomplete-big-search-example/autocomplete-big-search-example.component';


@NgModule({
  declarations: [
    AutocompleteIndexComponent,
    AutocompleteExamplesComponent,
    AutocompleteSearchExampleComponent,
    AutocompleteBigSearchExampleComponent
  ],
  imports: [
    CommonModule,
    AutocompleteRoutingModule,
    ItTabContainerComponent,
    ItTabItemComponent,
    SharedModule
  ]
})
export class AutocompleteModule { }
