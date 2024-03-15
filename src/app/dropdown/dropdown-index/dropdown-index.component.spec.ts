import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownIndexComponent } from './dropdown-index.component';

describe('DropdownIndexComponent', () => {
  let component: DropdownIndexComponent;
  let fixture: ComponentFixture<DropdownIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownIndexComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
