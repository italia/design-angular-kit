import { Component, OnInit } from '@angular/core';
import { UploadFileListItem } from 'design-angular-kit/interfaces/form';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'it-upload-image-list-example',
  templateUrl: './upload-image-list-example.component.html',
  standalone: false,
})
export class UploadImageListExampleComponent implements OnInit {
  uploadedImageList: Array<UploadFileListItem> = [];

  constructor(private readonly httpClient: HttpClient) {}

  ngOnInit() {
    const images$ = [
      'https://picsum.photos/40/40?image=1055',
      'https://picsum.photos/80/40?image=1056',
      'https://picsum.photos/40/40?image=1057',
      'https://picsum.photos/120/200?image=1058',
    ].map(url => this.httpClient.get(url, { responseType: 'blob' }));

    forkJoin(images$).subscribe(blobImages => {
      this.uploadedImageList = blobImages.map((blob, index) => {
        const fileName = index === 1 ? 'nome-file-2-nome-file-lungo-per-ellissi.jpg' : `nome-file-${index + 1}.jpg`;
        return {
          id: index,
          file: new File([blob], fileName),
          removable: index > 1,
          progress: index === 2 ? 45 : undefined,
          error: index === 3,
        };
      });
    });
  }

  onUpdateImageList(files: FileList): void {
    const newFiles: Array<UploadFileListItem> = Array.from(files).map((file, index) => ({
      id: index + this.uploadedImageList.length, // I set an id, useful when deleting
      file, // The uploaded file
      removable: true, // set new file as removable
    }));

    this.uploadedImageList = [...this.uploadedImageList, ...newFiles];
  }

  onDeleteImageList(item: UploadFileListItem): void {
    this.uploadedImageList = this.uploadedImageList.filter(i => i.id !== item.id);
  }
}
