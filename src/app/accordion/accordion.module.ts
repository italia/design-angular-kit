import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionRoutingModule } from './accordion-routing.module';
import { AccordionExamplesComponent } from './accordion-examples/accordion-examples.component';
import { AccordionIndexComponent } from './accordion-index/accordion-index.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AccordionGroupExampleComponent } from './accordion-group-example/accordion-group-example.component';
import { AccordionNestedExampleComponent } from './accordion-nested-example/accordion-nested-example.component';

@NgModule({
  imports: [CommonModule, FormsModule, SharedModule, AccordionRoutingModule],
  declarations: [AccordionExamplesComponent, AccordionIndexComponent, AccordionGroupExampleComponent, AccordionNestedExampleComponent],
})
export class AccordionModule {}
