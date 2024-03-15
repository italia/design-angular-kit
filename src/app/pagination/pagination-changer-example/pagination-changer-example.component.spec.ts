import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationChangerExampleComponent } from './pagination-changer-example.component';

describe('PaginationChangerExampleComponent', () => {
  let component: PaginationChangerExampleComponent;
  let fixture: ComponentFixture<PaginationChangerExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginationChangerExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginationChangerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
