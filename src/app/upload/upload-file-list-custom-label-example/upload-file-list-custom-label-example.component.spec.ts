import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFileListCustomLabelExampleComponent } from './upload-file-list-custom-label-example.component';

describe('UploadFileListCustomLabelExampleComponent', () => {
  let component: UploadFileListCustomLabelExampleComponent;
  let fixture: ComponentFixture<UploadFileListCustomLabelExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UploadFileListCustomLabelExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UploadFileListCustomLabelExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
