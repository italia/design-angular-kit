import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationSimpleExampleComponent } from './pagination-simple-example.component';

describe('PaginationSimpleExampleComponent', () => {
  let component: PaginationSimpleExampleComponent;
  let fixture: ComponentFixture<PaginationSimpleExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginationSimpleExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginationSimpleExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
