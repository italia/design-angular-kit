import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordInputIndexComponent } from './password-input-index.component';

describe('PasswordInputIndexComponent', () => {
  let component: PasswordInputIndexComponent;
  let fixture: ComponentFixture<PasswordInputIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordInputIndexComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordInputIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
