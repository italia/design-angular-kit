import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { SelectGroupExampleComponent } from './select-group-example.component';

describe('SelectGroupExampleComponent', () => {
  let component: SelectGroupExampleComponent;
  let fixture: ComponentFixture<SelectGroupExampleComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectGroupExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectGroupExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
