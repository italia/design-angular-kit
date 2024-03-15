import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarExampleGroupComponent } from './avatar-example-group.component';

describe('AvatarExampleGroupComponent', () => {
  let component: AvatarExampleGroupComponent;
  let fixture: ComponentFixture<AvatarExampleGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvatarExampleGroupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AvatarExampleGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
