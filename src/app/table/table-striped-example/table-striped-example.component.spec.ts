import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStripedExampleComponent } from './table-striped-example.component';

describe('TableSripedExampleComponent', () => {
  let component: TableStripedExampleComponent;
  let fixture: ComponentFixture<TableStripedExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableStripedExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TableStripedExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
