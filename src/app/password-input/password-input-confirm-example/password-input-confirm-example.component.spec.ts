import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordInputConfirmExampleComponent } from './password-input-confirm-example.component';

describe('PasswordInputConfirmExampleComponent', () => {
  let component: PasswordInputConfirmExampleComponent;
  let fixture: ComponentFixture<PasswordInputConfirmExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordInputConfirmExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordInputConfirmExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
