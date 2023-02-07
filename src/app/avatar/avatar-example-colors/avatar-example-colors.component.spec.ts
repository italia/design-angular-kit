import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarExampleColorsComponent } from './avatar-example-colors.component';

describe('AvatarExampleColorsComponent', () => {
  let component: AvatarExampleColorsComponent;
  let fixture: ComponentFixture<AvatarExampleColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarExampleColorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarExampleColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
