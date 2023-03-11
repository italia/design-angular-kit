import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerExamplesComponent } from './spinner-examples.component';

describe('SpinnerExamplesComponent', () => {
  let component: SpinnerExamplesComponent;
  let fixture: ComponentFixture<SpinnerExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinnerExamplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinnerExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
