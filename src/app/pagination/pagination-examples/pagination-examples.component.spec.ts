import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationExamplesComponent } from './pagination-examples.component';

describe('PaginationExamplesComponent', () => {
  let component: PaginationExamplesComponent;
  let fixture: ComponentFixture<PaginationExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginationExamplesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginationExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
