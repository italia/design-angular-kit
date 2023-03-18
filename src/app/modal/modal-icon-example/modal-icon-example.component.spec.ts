import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalIconExampleComponent } from './modal-icon-example.component';

describe('ModalIconExampleComponent', () => {
  let component: ModalIconExampleComponent;
  let fixture: ComponentFixture<ModalIconExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalIconExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalIconExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
