import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItUploadDragDropComponent } from './upload-drag-drop.component';
import { tb_base } from '../../../../test';

describe('ItUploadDragDropComponent', () => {
  let component: ItUploadDragDropComponent;
  let fixture: ComponentFixture<ItUploadDragDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base)
      .compileComponents();

    fixture = TestBed.createComponent(ItUploadDragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
