import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSizeExampleComponent } from './modal-size-example.component';

describe('ModalSizeExampleComponent', () => {
  let component: ModalSizeExampleComponent;
  let fixture: ComponentFixture<ModalSizeExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSizeExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSizeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
