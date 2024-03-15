import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertClosingExampleComponent } from './alert-closing-example.component';

describe('AlertClosingExampleComponent', () => {
  let component: AlertClosingExampleComponent;
  let fixture: ComponentFixture<AlertClosingExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertClosingExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertClosingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
