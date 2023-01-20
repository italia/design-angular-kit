import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadExamplesComponent } from './upload-examples.component';

describe('UploadExamplesComponent', () => {
  let component: UploadExamplesComponent;
  let fixture: ComponentFixture<UploadExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadExamplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
