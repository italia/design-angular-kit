import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectExamplesComponent } from './select-examples.component';

describe('FormInputExamplesComponent', () => {
  let component: SelectExamplesComponent;
  let fixture: ComponentFixture<SelectExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
