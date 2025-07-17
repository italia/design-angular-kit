import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { forkJoin, take, tap } from 'rxjs';
import { ItAbstractComponent } from '../../../abstracts/abstract.component';
import { UploadFileListItem } from '../../../interfaces/form';
import { inputToBoolean } from '../../../utils/coercion';
import { ItFileUtils } from '../../../utils/file-utils';
import { ItProgressBarComponent } from '../../core/progress-bar/progress-bar.component';
import { ItTooltipDirective } from '../../core/tooltip/tooltip.directive';
import { ItIconComponent } from '../../utils/icon/icon.component';

@Component({
  standalone: true,
  selector: 'it-upload-file-list',
  templateUrl: './upload-file-list.component.html',
  imports: [ItIconComponent, TranslateModule, ItTooltipDirective, ItProgressBarComponent],
})
export class ItUploadFileListComponent extends ItAbstractComponent implements OnInit, OnChanges {
  /**
   * The list of files to show in list
   */
  @Input({ required: true }) fileList!: Array<UploadFileListItem>;

  /**
   * The accepted file type to upload <br>
   * Possible values: <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types">MIME Types</a> separated by comma
   * @example application/pdf,image/png
   * @default *
   */
  @Input() accept: string = '*';

  /**
   * A label for the upload button
   */
  @Input({ required: false }) label?: string;

  /**
   * If upload multiple files
   * @default true
   */
  @Input({ transform: inputToBoolean }) multiple: boolean = true;

  /**
   * If is file list image
   * @default false
   */
  @Input({ transform: inputToBoolean }) images?: boolean;

  /**
   * Hide the load button
   * @default false
   */
  @Input({ transform: inputToBoolean }) hideLoadButton?: boolean;

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
    if (!!this.images && this.accept === '*') {
      this.accept = 'image/*';
    }
  }

  override ngOnChanges(changes: SimpleChanges): void {
    if (changes['fileList'] && !!this.images) {
      const images$ = this.fileList.map(item =>
        ItFileUtils.fileToBase64(item.file).pipe(
          take(1),
          tap(base64 => this.previewImages.set(item.id, base64))
        )
      );
      forkJoin(images$).subscribe(() => {
        this._changeDetectorRef.detectChanges();
        super.ngOnChanges(changes);
      });
    } else {
      super.ngOnChanges(changes);
    }
  }

  /**
   * On load file from input
   * @param event
   */
  onLoadFiles(event: Event): void {
    const input = event.target as HTMLInputElement;
    const files = input?.files;
    if (!files?.length) {
      return;
    }

    const newFiles = Array.from(files).filter(
      file =>
        !this.fileList.some(item => {
          return item.file.name === file.name && item.file.size === file.size && item.file.type === file.type;
        })
    );

    const fileList = new DataTransfer();
    newFiles.forEach(file => fileList.items.add(file));

    this.uploadFiles.emit(fileList.files);
    input.value = '';
  }

  /**
   * Get the file size string
   * @param file
   */
  getFileSize(file: File): string {
    return ItFileUtils.getFileSizeString(file);
  }
}
