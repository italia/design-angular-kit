import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchIndexComponent } from './search-index/search-index.component';
import { ItTabContainerComponent } from 'design-angular-kit/components/core/tab/tab-container/tab-container.component';
import { ItTabItemComponent } from 'design-angular-kit/components/core/tab/tab-item/tab-item.component';
import { SharedModule } from '../shared/shared.module';
import { SearchExamplesComponent } from './search-examples/search-examples.component';
import { SearchSearchExampleComponent } from './search-search-example/search-search-example.component';
import { SearchBigSearchExampleComponent } from './search-big-search-example/search-big-search-example.component';

@NgModule({
  declarations: [SearchIndexComponent, SearchExamplesComponent, SearchSearchExampleComponent, SearchBigSearchExampleComponent],
  imports: [CommonModule, SearchRoutingModule, ItTabContainerComponent, ItTabItemComponent, SharedModule],
})
export class SearchModule {}
