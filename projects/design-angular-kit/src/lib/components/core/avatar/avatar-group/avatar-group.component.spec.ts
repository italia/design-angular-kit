import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItAvatarGroupComponent, ItAvatarGroupItemComponent } from './avatar-group.component';

describe('AvatarGroupComponent', () => {
  let component: ItAvatarGroupComponent;
  let fixture: ComponentFixture<ItAvatarGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItAvatarGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItAvatarGroupComponent);
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

