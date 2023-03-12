import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBorderedExampleComponent } from './table-bordered-example.component';

describe('TableBorderedExampleComponent', () => {
  let component: TableBorderedExampleComponent;
  let fixture: ComponentFixture<TableBorderedExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableBorderedExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableBorderedExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
