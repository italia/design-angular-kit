import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBorderlessExampleComponent } from './table-borderless-example.component';

describe('TableBorderlessExampleComponent', () => {
  let component: TableBorderlessExampleComponent;
  let fixture: ComponentFixture<TableBorderlessExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableBorderlessExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TableBorderlessExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
