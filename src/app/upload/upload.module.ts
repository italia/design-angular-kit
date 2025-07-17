import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { UploadDragDropExampleComponent } from './upload-drag-drop-example/upload-drag-drop-example.component';
import { UploadExamplesComponent } from './upload-examples/upload-examples.component';
import { UploadFileListCustomLabelExampleComponent } from './upload-file-list-custom-label-example/upload-file-list-custom-label-example.component';
import { UploadFileListExampleComponent } from './upload-file-list-example/upload-file-list-example.component';
import { UploadImageListExampleComponent } from './upload-image-list-example/upload-image-list-example.component';
import { UploadIndexComponent } from './upload-index/upload-index.component';
import { UploadRoutingModule } from './upload-routing.module';

@NgModule({
  declarations: [
    UploadIndexComponent,
    UploadExamplesComponent,
    UploadFileListExampleComponent,
    UploadFileListCustomLabelExampleComponent,
    UploadImageListExampleComponent,
    UploadDragDropExampleComponent,
  ],
  imports: [CommonModule, SharedModule, FormsModule, UploadRoutingModule],
})
export class UploadModule {}
