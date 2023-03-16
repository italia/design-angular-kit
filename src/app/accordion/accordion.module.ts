import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AccordionRoutingModule } from './accordion-routing.module';
import { AccordionIndexComponent } from './accordion-index/accordion-index.component';
import { AccordionExamplesComponent } from './accordion-examples/accordion-examples.component';
import { AccordionComponentExampleComponent } from './accordion-component-example/accordion-component-example.component';



@NgModule({
  declarations: [
    AccordionIndexComponent,
    AccordionExamplesComponent,
    AccordionComponentExampleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AccordionRoutingModule
  ]
})
export class AccordionModule { }
