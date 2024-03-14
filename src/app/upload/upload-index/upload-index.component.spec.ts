import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadIndexComponent } from './upload-index.component';

describe('UploadIndexComponent', () => {
  let component: UploadIndexComponent;
  let fixture: ComponentFixture<UploadIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UploadIndexComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UploadIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
