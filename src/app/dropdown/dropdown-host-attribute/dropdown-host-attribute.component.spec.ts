import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownHostAttributeComponent } from './dropdown-host-attribute.component';

describe('DropdownHostAttributeComponent', () => {
  let component: DropdownHostAttributeComponent;
  let fixture: ComponentFixture<DropdownHostAttributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownHostAttributeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownHostAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
