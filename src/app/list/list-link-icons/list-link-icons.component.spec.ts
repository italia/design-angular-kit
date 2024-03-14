import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLinkIconsComponent } from './list-link-icons.component';

describe('ListLinkIconsComponent', () => {
  let component: ListLinkIconsComponent;
  let fixture: ComponentFixture<ListLinkIconsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListLinkIconsComponent],
    });
    fixture = TestBed.createComponent(ListLinkIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
