import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItAvatarDropdownComponent } from './avatar-dropdown.component';

describe('AvatarDropdownComponent', () => {
  let component: ItAvatarDropdownComponent;
  let fixture: ComponentFixture<ItAvatarDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItAvatarDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItAvatarDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
