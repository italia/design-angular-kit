import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHoverExampleComponent } from './table-hover-example.component';

describe('TableHoverExampleComponent', () => {
  let component: TableHoverExampleComponent;
  let fixture: ComponentFixture<TableHoverExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableHoverExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TableHoverExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
