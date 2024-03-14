import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertAdditionalContentExampleComponent } from './alert-additional-content-example.component';

describe('AlertAdditionalContentExampleComponent', () => {
  let component: AlertAdditionalContentExampleComponent;
  let fixture: ComponentFixture<AlertAdditionalContentExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertAdditionalContentExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertAdditionalContentExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
