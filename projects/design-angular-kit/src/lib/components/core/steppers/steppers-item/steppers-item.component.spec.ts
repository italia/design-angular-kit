import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItSteppersItemComponent } from './steppers-item.component';

describe('ItSteppersItemComponent', () => {
  let component: ItSteppersItemComponent;
  let fixture: ComponentFixture<ItSteppersItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItSteppersItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItSteppersItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
