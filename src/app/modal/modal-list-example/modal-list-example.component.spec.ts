import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalListExampleComponent } from './modal-list-example.component';

describe('ModalListExampleComponent', () => {
  let component: ModalListExampleComponent;
  let fixture: ComponentFixture<ModalListExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalListExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalListExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
