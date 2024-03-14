import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLinkMultilineComponent } from './list-link-multiline.component';

describe('ListLinkMultilineComponent', () => {
  let component: ListLinkMultilineComponent;
  let fixture: ComponentFixture<ListLinkMultilineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListLinkMultilineComponent],
    });
    fixture = TestBed.createComponent(ListLinkMultilineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
