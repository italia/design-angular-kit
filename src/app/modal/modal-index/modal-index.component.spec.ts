import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalIndexComponent } from './modal-index.component';

describe('ModalIndexComponent', () => {
  let component: ModalIndexComponent;
  let fixture: ComponentFixture<ModalIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalIndexComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
