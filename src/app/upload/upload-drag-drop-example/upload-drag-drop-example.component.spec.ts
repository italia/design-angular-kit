import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDragDropExampleComponent } from './upload-drag-drop-example.component';

describe('UploadDragDropExampleComponent', () => {
  let component: UploadDragDropExampleComponent;
  let fixture: ComponentFixture<UploadDragDropExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadDragDropExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadDragDropExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
