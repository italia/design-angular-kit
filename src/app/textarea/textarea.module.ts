import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextareaIndexComponent } from './textarea-index/textarea-index.component';
import { SharedModule } from '../shared/shared.module';
import { TextareaRoutingModule } from './textarea-routing.module';
import { TextareaExamplesComponent } from './textarea-examples/textarea-examples.component';
import { TextareaExampleComponent } from './textarea-example/textarea-example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TextareaIndexComponent, TextareaExamplesComponent, TextareaExampleComponent],
  imports: [CommonModule, SharedModule, TextareaRoutingModule, FormsModule, ReactiveFormsModule],
})
export class TextareaModule {}
