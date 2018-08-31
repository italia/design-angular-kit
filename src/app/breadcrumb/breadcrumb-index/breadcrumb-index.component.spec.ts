import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbIndexComponent } from './breadcrumb-index.component';

describe('BreadcrumbIndexComponent', () => {
  let component: BreadcrumbIndexComponent;
  let fixture: ComponentFixture<BreadcrumbIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
