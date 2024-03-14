import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAlignmentExampleComponent } from './table-alignment-example.component';

describe('TableAlignmentExampleComponent', () => {
  let component: TableAlignmentExampleComponent;
  let fixture: ComponentFixture<TableAlignmentExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableAlignmentExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TableAlignmentExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
