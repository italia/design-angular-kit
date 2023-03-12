import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationExampleComponent } from './pagination-example.component';

describe('PaginationExampleComponent', () => {
  let component: PaginationExampleComponent;
  let fixture: ComponentFixture<PaginationExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
