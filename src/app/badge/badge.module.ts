import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { BadgeRoutingModule } from './badge-routing.module';
import { BadgeExampleComponent } from './badge-example/badge-example.component';
import { BadgeExamplesComponent } from './badge-examples/badge-examples.component';
import { BadgeIndexComponent } from './badge-index/badge-index.component';

@NgModule({
  imports: [CommonModule, FormsModule, SharedModule, BadgeRoutingModule],
  declarations: [BadgeExampleComponent, BadgeExamplesComponent, BadgeIndexComponent],
})
export class BadgeModule {}
