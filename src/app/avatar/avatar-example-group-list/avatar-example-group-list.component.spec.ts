import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarExampleGroupListComponent } from './avatar-example-group-list.component';

describe('AvatarExampleGroupListComponent', () => {
  let component: AvatarExampleGroupListComponent;
  let fixture: ComponentFixture<AvatarExampleGroupListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvatarExampleGroupListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AvatarExampleGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
