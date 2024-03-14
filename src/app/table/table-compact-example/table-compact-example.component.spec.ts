import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCompactExampleComponent } from './table-compact-example.component';

describe('TableCompactExampleComponent', () => {
  let component: TableCompactExampleComponent;
  let fixture: ComponentFixture<TableCompactExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableCompactExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TableCompactExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
