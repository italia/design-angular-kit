import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarExampleDropdownComponent } from './avatar-example-dropdown.component';

describe('AvatarExampleDropdownComponent', () => {
  let component: AvatarExampleDropdownComponent;
  let fixture: ComponentFixture<AvatarExampleDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarExampleDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarExampleDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
