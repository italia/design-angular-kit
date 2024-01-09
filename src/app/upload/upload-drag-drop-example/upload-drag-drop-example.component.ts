import {Component, ViewChild} from '@angular/core';
import {interval, map, take} from "rxjs";
import {
  ItUploadDragDropComponent
} from "design-angular-kit/components/form/upload-drag-drop/upload-drag-drop.component";

@Component({
  selector: 'it-upload-drag-drop-example',
  templateUrl: './upload-drag-drop-example.component.html'
})
export class UploadDragDropExampleComponent {

  @ViewChild('uploadDragDropComponent') uploadDragDropComponent!: ItUploadDragDropComponent;

  onDragUploadStart(file: File): void {
    interval(1000).pipe( // Simulate upload of single file
      take(100),
      map(x => (x + 1) * 10) // Start from 1, end 100
    ).subscribe(progress => {
      this.uploadDragDropComponent.progress(progress);
      if (progress >= 100) {
        setTimeout(() => {
          this.uploadDragDropComponent.reset();
        }, 2000);
      }
    });
  }

}
