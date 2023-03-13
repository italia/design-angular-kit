import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerIndexComponent } from './spinner-index.component';

describe('SpinnerIndexComponent', () => {
  let component: SpinnerIndexComponent;
  let fixture: ComponentFixture<SpinnerIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinnerIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinnerIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
