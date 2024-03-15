import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItAvatarDropdownComponent } from './avatar-dropdown.component';
import { tb_base } from '../../../../../test';

describe('ItAvatarDropdownComponent', () => {
  let component: ItAvatarDropdownComponent;
  let fixture: ComponentFixture<ItAvatarDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base).compileComponents();

    fixture = TestBed.createComponent(ItAvatarDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
