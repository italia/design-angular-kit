import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordInputExamplesComponent } from './password-input-examples.component';

describe('PasswordInputExamplesComponent', () => {
  let component: PasswordInputExamplesComponent;
  let fixture: ComponentFixture<PasswordInputExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordInputExamplesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordInputExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
