import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDragDropComponent } from './upload-drag-drop.component';
import { tb_base } from '../../../../test';

describe('UploadDragDropComponent', () => {
  let component: UploadDragDropComponent;
  let fixture: ComponentFixture<UploadDragDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base)
      .compileComponents();

    fixture = TestBed.createComponent(UploadDragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
