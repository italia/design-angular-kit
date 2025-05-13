import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarExampleGroupListCssOnlyComponent } from './avatar-example-group-list-css-only.component';

describe('AvatarExampleGroupListCssOnlyComponent', () => {
  let component: AvatarExampleGroupListCssOnlyComponent;
  let fixture: ComponentFixture<AvatarExampleGroupListCssOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvatarExampleGroupListCssOnlyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AvatarExampleGroupListCssOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
