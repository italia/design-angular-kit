import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {AbstractComponent} from "../../../abstracts/abstract.component";
import {BooleanInput, isTrueBooleanInput} from "../../../utils/boolean-input";
import {UploadFileListItem} from "../../../interfaces/form";
import {FileUtils} from "../../../utils/file-utils";
import {take} from "rxjs";

@Component({
  selector: 'it-upload-file-list[id][fileList]',
  templateUrl: './upload-file-list.component.html',
  styleUrls: ['./upload-file-list.component.scss']
})
export class UploadFileListComponent extends AbstractComponent implements OnInit, OnChanges {

  /**
   * The list of files to show in list
   */
  @Input() fileList!: Array<UploadFileListItem>;

  /**
   * The accepted file type to upload
   * @default *
   */
  @Input() accept: string = "*";

  /**
   * If upload multiple files
   */
  @Input() multiple: BooleanInput = true;

  /**
   * If is file list image
   */
  @Input() images?: BooleanInput;

  /**
   * Hide the load button
   */
  @Input() hideLoadButton?: BooleanInput;

  /**
   * Fired when upload new files
   */
  @Output() uploadFiles: EventEmitter<FileList> = new EventEmitter<FileList>();

  /**
   * Fired on delete item button click
   */
  @Output() deleteItem: EventEmitter<UploadFileListItem> = new EventEmitter<UploadFileListItem>();

  /**
   * Cache to preview image
   */
  previewImages: Map<number, string> = new Map<number, string>();

  ngOnInit(): void {
    if (this.isImageList && this.accept === '*') {
      this.accept = 'image/*'
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['fileList'] && this.isImageList) {
      this.fileList.forEach(item => {
        FileUtils.fileToBase64(item.file).pipe(take(1)).subscribe(base64 => {
          this.previewImages.set(item.id, base64);
        })
      })
    }
  }

  get isMultipleInput(): boolean {
    return isTrueBooleanInput(this.multiple);
  }

  get isImageList(): boolean {
    return isTrueBooleanInput(this.images);
  }

  get isHideLoadButton(): boolean {
    return isTrueBooleanInput(this.hideLoadButton);
  }

  /**
   * On load file from input
   * @param event
   */
  onLoadFiles(event: Event): void {
    const files = (event.target as HTMLInputElement)?.files;
    if (!files || !files.length) {
      return;
    }
    this.uploadFiles.emit(files);
  }

  /**
   * Get the file size string
   * @param file
   */
  getFileSize(file: File): string {
    return FileUtils.getFileSizeString(file);
  }

}
