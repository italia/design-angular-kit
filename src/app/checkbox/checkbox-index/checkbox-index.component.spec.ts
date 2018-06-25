import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxIndexComponent } from './checkbox-index.component';

describe('CheckboxIndexComponent', () => {
  let component: CheckboxIndexComponent;
  let fixture: ComponentFixture<CheckboxIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
