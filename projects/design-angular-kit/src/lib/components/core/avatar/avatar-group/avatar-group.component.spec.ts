import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarGroupComponent, AvatarGroupItemComponent } from './avatar-group.component';

describe('AvatarGroupComponent', () => {
  let component: AvatarGroupComponent;
  let fixture: ComponentFixture<AvatarGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('ItAvatarGroupItemComponent', () => {
  let component: AvatarGroupItemComponent;
  let fixture: ComponentFixture<AvatarGroupItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarGroupItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarGroupItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

