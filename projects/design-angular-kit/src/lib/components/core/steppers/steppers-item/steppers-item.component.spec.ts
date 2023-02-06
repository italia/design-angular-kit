import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteppersItemComponent } from './steppers-item.component';

describe('SteppersItemComponent', () => {
  let component: SteppersItemComponent;
  let fixture: ComponentFixture<SteppersItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SteppersItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SteppersItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
