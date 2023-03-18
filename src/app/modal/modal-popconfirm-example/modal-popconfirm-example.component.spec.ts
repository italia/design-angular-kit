import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPopconfirmExampleComponent } from './modal-popconfirm-example.component';

describe('ModalPopconfirmExampleComponent', () => {
  let component: ModalPopconfirmExampleComponent;
  let fixture: ComponentFixture<ModalPopconfirmExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPopconfirmExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPopconfirmExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
