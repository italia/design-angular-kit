import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { SelectSizeExampleComponent } from './select-size-example.component';

describe('SelectSizeExampleComponent', () => {
  let component: SelectSizeExampleComponent;
  let fixture: ComponentFixture<SelectSizeExampleComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectSizeExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSizeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
