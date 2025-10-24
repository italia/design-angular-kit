import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHostAttributeComponent } from './list-host-attribute.component';

describe('ListHostAttributeComponent', () => {
  let component: ListHostAttributeComponent;
  let fixture: ComponentFixture<ListHostAttributeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListHostAttributeComponent],
    });
    fixture = TestBed.createComponent(ListHostAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
