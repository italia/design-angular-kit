import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { SelectReactiveFormExampleComponent } from './select-reactive-form-example.component';

describe('SelectReactiveFormExampleComponent', () => {
  let component: SelectReactiveFormExampleComponent;
  let fixture: ComponentFixture<SelectReactiveFormExampleComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectReactiveFormExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectReactiveFormExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
