import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarDropdownComponent } from './avatar-dropdown.component';

describe('AvatarDropdownComponent', () => {
  let component: AvatarDropdownComponent;
  let fixture: ComponentFixture<AvatarDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
