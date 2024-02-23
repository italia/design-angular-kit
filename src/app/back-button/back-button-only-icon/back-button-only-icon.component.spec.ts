import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackButtonOnlyIconComponent } from './back-button-only-icon.component';

describe('BackButtonOnlyIconComponent', () => {
  let component: BackButtonOnlyIconComponent;
  let fixture: ComponentFixture<BackButtonOnlyIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BackButtonOnlyIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BackButtonOnlyIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
