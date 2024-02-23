import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItUploadFileListComponent } from './upload-file-list.component';
import { tb_base } from '../../../../test';

describe('ItUploadFileListComponent', () => {
  let component: ItUploadFileListComponent;
  let fixture: ComponentFixture<ItUploadFileListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base).compileComponents();

    fixture = TestBed.createComponent(ItUploadFileListComponent);
    component = fixture.componentInstance;
    component.fileList = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
