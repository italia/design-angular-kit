import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadImageListExampleComponent } from './upload-image-list-example.component';

describe('UploadImageListExampleComponent', () => {
  let component: UploadImageListExampleComponent;
  let fixture: ComponentFixture<UploadImageListExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UploadImageListExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UploadImageListExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
