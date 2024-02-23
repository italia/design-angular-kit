import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalScrollExampleComponent } from './modal-scroll-example.component';

describe('ModalScrollExampleComponent', () => {
  let component: ModalScrollExampleComponent;
  let fixture: ComponentFixture<ModalScrollExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalScrollExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalScrollExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
