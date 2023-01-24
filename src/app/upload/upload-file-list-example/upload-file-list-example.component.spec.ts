import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFileListExampleComponent } from './upload-file-list-example.component';

describe('UploadFileListExampleComponent', () => {
  let component: UploadFileListExampleComponent;
  let fixture: ComponentFixture<UploadFileListExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadFileListExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadFileListExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
