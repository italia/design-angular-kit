import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationJumpExampleComponent } from './pagination-jump-example.component';

describe('PaginationJumpExampleComponent', () => {
  let component: PaginationJumpExampleComponent;
  let fixture: ComponentFixture<PaginationJumpExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationJumpExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationJumpExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
