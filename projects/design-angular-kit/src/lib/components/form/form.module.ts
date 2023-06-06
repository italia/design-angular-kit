import { NgModule } from '@angular/core';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { InputComponent } from './input/input.component';
import { PasswordInputComponent } from './password-input/password-input.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { RatingComponent } from './rating/rating.component';
import { SelectComponent } from './select/select.component';
import { TextareaComponent } from './textarea/textarea.component';
import { UploadDragDropComponent } from './upload-drag-drop/upload-drag-drop.component';
import { UploadFileListComponent } from './upload-file-list/upload-file-list.component';


const formComponents = [
  CheckboxComponent,
  InputComponent,
  PasswordInputComponent,
  RadioButtonComponent,
  RatingComponent,
  SelectComponent,
  TextareaComponent,
  UploadDragDropComponent,
  UploadFileListComponent
];

@NgModule({
  imports: formComponents,
  exports: formComponents
})
export class FormModule { }
