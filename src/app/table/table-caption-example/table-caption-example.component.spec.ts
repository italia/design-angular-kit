import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCaptionExampleComponent } from './table-caption-example.component';

describe('TableCaptionExampleComponent', () => {
  let component: TableCaptionExampleComponent;
  let fixture: ComponentFixture<TableCaptionExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCaptionExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCaptionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
