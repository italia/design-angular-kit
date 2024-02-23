import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationTotalNumberExampleComponent } from './pagination-total-number-example.component';

describe('PaginationTotalNumberExampleComponent', () => {
  let component: PaginationTotalNumberExampleComponent;
  let fixture: ComponentFixture<PaginationTotalNumberExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginationTotalNumberExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginationTotalNumberExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
