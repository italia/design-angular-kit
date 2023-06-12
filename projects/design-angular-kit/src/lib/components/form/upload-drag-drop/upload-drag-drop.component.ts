import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { ItAbstractComponent } from '../../../abstracts/abstract.component';
import { FileUtils } from '../../../utils/file-utils';
import { ProgressDonut } from 'bootstrap-italia';
import { ItIconComponent } from '../../utils/icon/icon.component';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'it-upload-drag-drop',
  templateUrl: './upload-drag-drop.component.html',
  exportAs: 'itUploadDragDrop',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ItIconComponent, NgIf, TranslateModule, NgOptimizedImage]
})
export class ItUploadDragDropComponent extends ItAbstractComponent implements AfterViewInit {

  /**
   * The accepted file type to upload <br>
   * Possible values: <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types">MIME Types</a> separated by comma
   * @example application/pdf,image/png
   * @default *
   */
  @Input() accept: string = '*';

  /**
   * Fired when file start to upload
   */
  @Output() fileStartUpload = new EventEmitter<File>();

  isDragover: boolean = false;
  isLoading: boolean = false;
  isSuccess: boolean = false;

  donut?: ProgressDonut;

  @ViewChild('donutElement') private donutElement?: ElementRef<HTMLDivElement>;

  filename?: string;
  extension?: string;
  fileSize?: string;

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
    if (this.donutElement) {
      this.donut = ProgressDonut.getOrCreateInstance(this.donutElement.nativeElement);
    }
  }

  // Dragover listener
  @HostListener('dragover', ['$event'])
  public onDragOver(evt: DragEvent): void {
    evt.preventDefault();
    evt.stopPropagation();
    this.isDragover = !this.isLoading;
  }


  // Dragleave listener
  @HostListener('dragleave', ['$event'])
  public onDragLeave(evt: DragEvent): void {
    evt.preventDefault();
    evt.stopPropagation();
    this.isDragover = false;
  }

  // Drop leave listener
  @HostListener('drop', ['$event'])
  public onDrop(evt: DragEvent): void {
    evt.preventDefault();
    evt.stopPropagation();

    this.isDragover = false;
    const files = evt.dataTransfer?.files;
    if (this.isLoading || !files?.length) {
      return;
    }
    this.start(files[0]);
  }

  /**
   * On load file from input
   * @param event
   */
  onLoadFile(event: Event): void {
    const files = (event.target as HTMLInputElement)?.files;
    if (!files?.length) {
      return;
    }
    this.start(files[0]);
  }

  /**
   * Start the upload file
   * @param file
   */
  public start(file: File): void {
    if (this.accept !== '*' && !this.accept.includes(file.type)) {
      return;
    }

    this.reset();
    this.isLoading = true;

    const splitName = file.name.split('.');
    this.filename = splitName[0];
    this.extension = splitName[1]?.toUpperCase();
    this.fileSize = FileUtils.getFileSizeString(file);

    this.fileStartUpload.emit(file);
  }

  /**
   * Percentage of upload
   * @param value the percentage [0 - 100]
   */
  public progress(value: number) {
    if (!this.isLoading) {
      return;
    }

    if (value >= 100) {
      this.success();
    } else {
      this.donut?.set(((value < 0) ? 0 : value) / 100);
    }
  }

  /**
   * Upload success
   */
  public success(): void {
    this.isLoading = false;
    this.isSuccess = true;
    this._changeDetectorRef.detectChanges();
  }

  /**
   * Reset file uploader
   */
  public reset(): void {
    this.isLoading = false;
    this.isSuccess = false;
    this.filename = this.extension = this.fileSize = undefined;
    this.donut?.set(0);
    this._changeDetectorRef.detectChanges();
  }

}
