import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerDoubleExampleComponent } from './spinner-double-example.component';

describe('SpinnerDoubleExampleComponent', () => {
  let component: SpinnerDoubleExampleComponent;
  let fixture: ComponentFixture<SpinnerDoubleExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpinnerDoubleExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpinnerDoubleExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
