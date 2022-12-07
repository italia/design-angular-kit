import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarGroupComponent, ItAvatarGroupItemComponent } from './avatar-group.component';

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
  let component: ItAvatarGroupItemComponent;
  let fixture: ComponentFixture<ItAvatarGroupItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItAvatarGroupItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItAvatarGroupItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

