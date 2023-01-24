import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-upload-index',
  templateUrl: './upload-index.component.html'
})
export class UploadIndexComponent {

  fileListComponent: any;
  dragDropComponent: any;

  constructor() {
    this.fileListComponent = (<any>Documentation).components.find(component => component.name === 'UploadFileListComponent');
    this.dragDropComponent = (<any>Documentation).components.find(component => component.name === 'UploadDragDropComponent');
  }
}
