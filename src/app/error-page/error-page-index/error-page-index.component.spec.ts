import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPageIndexComponent } from './error-page-index.component';

describe('ErrorPageIndexComponent', () => {
  let component: ErrorPageIndexComponent;
  let fixture: ComponentFixture<ErrorPageIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorPageIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorPageIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
