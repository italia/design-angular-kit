import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbExamplesComponent } from './breadcrumb-examples.component';

describe('BreadcrumbExamplesComponent', () => {
  let component: BreadcrumbExamplesComponent;
  let fixture: ComponentFixture<BreadcrumbExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BreadcrumbExamplesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
