import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItBreadcrumbItemComponent } from './breadcrumb-item.component';

describe('ItBreadcrumbItemComponent', () => {
  let component: ItBreadcrumbItemComponent;
  let fixture: ComponentFixture<ItBreadcrumbItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItBreadcrumbItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItBreadcrumbItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
