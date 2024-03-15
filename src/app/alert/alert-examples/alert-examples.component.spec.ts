import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertExamplesComponent } from './alert-examples.component';

describe('AlertExamplesComponent', () => {
  let component: AlertExamplesComponent;
  let fixture: ComponentFixture<AlertExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertExamplesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
