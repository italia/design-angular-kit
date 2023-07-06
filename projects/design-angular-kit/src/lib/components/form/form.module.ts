import { NgModule } from '@angular/core';
import { ItCheckboxComponent } from './checkbox/checkbox.component';
import { ItInputComponent } from './input/input.component';
import { ItPasswordInputComponent } from './password-input/password-input.component';
import { ItRadioButtonComponent } from './radio-button/radio-button.component';
import { ItRangeComponent } from './range/range.component';
import { ItRatingComponent } from './rating/rating.component';
import { ItSelectComponent } from './select/select.component';
import { ItTextareaComponent } from './textarea/textarea.component';
import { ItUploadDragDropComponent } from './upload-drag-drop/upload-drag-drop.component';
import { ItUploadFileListComponent } from './upload-file-list/upload-file-list.component';


const formComponents = [
  ItCheckboxComponent,
  ItInputComponent,
  ItPasswordInputComponent,
  ItRadioButtonComponent,
  ItRangeComponent,
  ItRatingComponent,
  ItSelectComponent,
  ItTextareaComponent,
  ItUploadDragDropComponent,
  ItUploadFileListComponent
];

@NgModule({
  imports: formComponents,
  exports: formComponents
})
export class ItFormModule { }
