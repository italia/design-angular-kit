import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarExamplesComponent } from './avatar-examples.component';

describe('AvatarExamplesComponent', () => {
  let component: AvatarExamplesComponent;
  let fixture: ComponentFixture<AvatarExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvatarExamplesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AvatarExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
