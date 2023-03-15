import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPageRouteExampleComponent } from './error-page-route-example.component';

describe('ErrorPageRouteExampleComponent', () => {
  let component: ErrorPageRouteExampleComponent;
  let fixture: ComponentFixture<ErrorPageRouteExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorPageRouteExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorPageRouteExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
