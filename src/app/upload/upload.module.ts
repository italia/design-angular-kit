import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadIndexComponent } from './upload-index/upload-index.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { UploadRoutingModule } from './upload-routing.module';
import { UploadExamplesComponent } from './upload-examples/upload-examples.component';
import { UploadFileListExampleComponent } from './upload-file-list-example/upload-file-list-example.component';
import { UploadImageListExampleComponent } from './upload-image-list-example/upload-image-list-example.component';
import { UploadDragDropExampleComponent } from './upload-drag-drop-example/upload-drag-drop-example.component';

@NgModule({
  declarations: [
    UploadIndexComponent,
    UploadExamplesComponent,
    UploadFileListExampleComponent,
    UploadImageListExampleComponent,
    UploadDragDropExampleComponent,
  ],
  imports: [CommonModule, SharedModule, FormsModule, UploadRoutingModule],
})
export class UploadModule {}
