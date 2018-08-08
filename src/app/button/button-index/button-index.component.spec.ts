import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonIndexComponent } from './button-index.component';

describe('ButtonIndexComponent', () => {
  let component: ButtonIndexComponent;
  let fixture: ComponentFixture<ButtonIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
