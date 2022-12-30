import {Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild} from '@angular/core';
import {AbstractComponent} from "../../../abstracts/abstract.component";
import {FileUtils} from "../../../utils/file-utils";

// Note: not use import from 'bootstrap-italia' to prevent duplicate import (js loaded from angular.json)
// TODO: bootstrap-italia npm es6 import error -> import { ProgressDonut } from 'bootstrap-italia';
declare let bootstrap: any;

@Component({
  selector: 'it-upload-drag-drop[id]',
  templateUrl: './upload-drag-drop.component.html',
  styleUrls: ['./upload-drag-drop.component.scss'],
  exportAs: 'itUploadDragDrop'
})
export class UploadDragDropComponent extends AbstractComponent {

  /**
   * The accepted file type to upload
   * @default *
   */
  @Input() accept: string = "*";

  /**
   * Fired when file start to upload
   */
  @Output() fileStartUpload = new EventEmitter<File>();

  isDragover: boolean = false;
  isLoading: boolean = false;
  isSuccess: boolean = false;

  donut?: any;

  @ViewChild('donutElement')
  private donutElement?: ElementRef<HTMLDivElement>;

  filename?: string;
  extension?: string;
  fileSize?: string;

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
    if (this.donutElement) {
      this.donut = bootstrap.ProgressDonut.getOrCreateInstance(this.donutElement.nativeElement);
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
    if (this.accept !== '*' && file.type !== this.accept) {
      return;
    }

    this.donut?.set(0);
    this.isLoading = true;

    const splitName = file.name.split(".");
    this.filename = splitName[0];
    this.extension = splitName[1]?.toUpperCase();
    this.fileSize = FileUtils.getFileSizeString(file);

    this.fileStartUpload.emit(file);
  }

  /**
   * Percentage of upload
   * @param value the percentage
   */
  public progress(value: number) {
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
  }

  /**
   * Reset file uploader
   */
  public reset(): void {
    this.isLoading = false;
    this.isSuccess = false;
    this.filename = this.extension = this.fileSize = undefined;
    this.donut?.set(0);
  }

}
