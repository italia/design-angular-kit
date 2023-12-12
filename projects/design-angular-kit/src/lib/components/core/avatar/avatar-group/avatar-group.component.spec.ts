import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItAvatarGroupComponent, ItAvatarGroupItemComponent } from './avatar-group.component';
import { tb_base } from '../../../../../test';

describe('ItAvatarGroupComponent', () => {
  let component: ItAvatarGroupComponent;
  let fixture: ComponentFixture<ItAvatarGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base)
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
    await TestBed.configureTestingModule(tb_base)
      .compileComponents();

    fixture = TestBed.createComponent(ItAvatarGroupItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
