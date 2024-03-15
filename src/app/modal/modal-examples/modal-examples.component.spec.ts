import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExamplesComponent } from './modal-examples.component';

describe('ModalExamplesComponent', () => {
  let component: ModalExamplesComponent;
  let fixture: ComponentFixture<ModalExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalExamplesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
