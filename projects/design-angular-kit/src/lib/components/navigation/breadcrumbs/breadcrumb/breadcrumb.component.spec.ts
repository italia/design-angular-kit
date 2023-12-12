import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItBreadcrumbComponent } from './breadcrumb.component';
import { tb_base } from '../../../../../test';

describe('ItBreadcrumbComponent', () => {
  let component: ItBreadcrumbComponent;
  let fixture: ComponentFixture<ItBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base)
      .compileComponents();

    fixture = TestBed.createComponent(ItBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
