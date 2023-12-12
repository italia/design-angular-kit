import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationTextLinksExampleComponent } from './pagination-text-links-example.component';

describe('PaginationTextLinksExampleComponent', () => {
  let component: PaginationTextLinksExampleComponent;
  let fixture: ComponentFixture<PaginationTextLinksExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationTextLinksExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationTextLinksExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
