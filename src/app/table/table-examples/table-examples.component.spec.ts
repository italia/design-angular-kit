import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableExamplesComponent } from './table-examples.component';

describe('TableExamplesComponent', () => {
  let component: TableExamplesComponent;
  let fixture: ComponentFixture<TableExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableExamplesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TableExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
