import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAlignmentExampleComponent } from './modal-alignment-example.component';

describe('ModalAlignmentExampleComponent', () => {
  let component: ModalAlignmentExampleComponent;
  let fixture: ComponentFixture<ModalAlignmentExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalAlignmentExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalAlignmentExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
