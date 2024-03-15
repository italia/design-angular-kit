import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertColorExampleComponent } from './alert-color-example.component';

describe('AlertColorExampleComponent', () => {
  let component: AlertColorExampleComponent;
  let fixture: ComponentFixture<AlertColorExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertColorExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertColorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
