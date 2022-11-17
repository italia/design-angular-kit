import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { FormInputCalendarExampleComponent } from './form-input-calendar.component';

describe('FormInputIconExampleComponent', () => {
  let component: FormInputCalendarExampleComponent;
  let fixture: ComponentFixture<FormInputCalendarExampleComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInputCalendarExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputCalendarExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
