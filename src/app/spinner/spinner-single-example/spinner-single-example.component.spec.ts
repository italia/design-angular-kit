import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerSingleExampleComponent } from './spinner-single-example.component';

describe('SpinnerSingleExampleComponent', () => {
  let component: SpinnerSingleExampleComponent;
  let fixture: ComponentFixture<SpinnerSingleExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpinnerSingleExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpinnerSingleExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
