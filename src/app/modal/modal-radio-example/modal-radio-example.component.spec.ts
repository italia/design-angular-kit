import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRadioExampleComponent } from './modal-radio-example.component';

describe('ModalRadioExampleComponent', () => {
  let component: ModalRadioExampleComponent;
  let fixture: ComponentFixture<ModalRadioExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalRadioExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalRadioExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
