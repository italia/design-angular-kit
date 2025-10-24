import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHostAttributeWithLinkComponent } from './list-host-attribute-with-link.component';

describe('ListHostAttributeComponent', () => {
  let component: ListHostAttributeWithLinkComponent;
  let fixture: ComponentFixture<ListHostAttributeWithLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListHostAttributeWithLinkComponent],
    });
    fixture = TestBed.createComponent(ListHostAttributeWithLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
