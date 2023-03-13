import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFooterExampleComponent } from './table-footer-example.component';

describe('TableFooterExampleComponent', () => {
  let component: TableFooterExampleComponent;
  let fixture: ComponentFixture<TableFooterExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableFooterExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableFooterExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
