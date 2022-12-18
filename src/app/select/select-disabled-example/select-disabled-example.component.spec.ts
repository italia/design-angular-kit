import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { SelectDisabledExampleComponent } from './select-disabled-example.component';

describe('SelectDisabledExampleComponent', () => {
  let component: SelectDisabledExampleComponent;
  let fixture: ComponentFixture<SelectDisabledExampleComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectDisabledExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDisabledExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
