import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHeaderExampleComponent } from './table-header-example.component';

describe('TableHeaderExampleComponent', () => {
  let component: TableHeaderExampleComponent;
  let fixture: ComponentFixture<TableHeaderExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableHeaderExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableHeaderExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
