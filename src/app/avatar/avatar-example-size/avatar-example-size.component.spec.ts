import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarExampleSizeComponent } from './avatar-example-size.component';

describe('AvatarExampleSizeComponent', () => {
  let component: AvatarExampleSizeComponent;
  let fixture: ComponentFixture<AvatarExampleSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvatarExampleSizeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AvatarExampleSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
