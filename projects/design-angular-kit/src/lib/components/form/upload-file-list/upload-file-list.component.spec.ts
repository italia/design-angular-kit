import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFileListComponent } from './upload-file-list.component';
import { tb_base } from '../../../../test';

describe('UploadFileListComponent', () => {
  let component: UploadFileListComponent;
  let fixture: ComponentFixture<UploadFileListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base)
      .compileComponents();

    fixture = TestBed.createComponent(UploadFileListComponent);
    component = fixture.componentInstance;
    component.fileList = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
