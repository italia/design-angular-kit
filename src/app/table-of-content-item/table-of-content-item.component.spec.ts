import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOfContentItemComponent } from './table-of-content-item.component';

describe('TableOfContentItemComponent', () => {
  let component: TableOfContentItemComponent;
  let fixture: ComponentFixture<TableOfContentItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableOfContentItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableOfContentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
