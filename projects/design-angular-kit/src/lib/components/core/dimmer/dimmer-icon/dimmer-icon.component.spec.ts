import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItDimmerIconComponent } from './dimmer-icon.component';

describe('ItDimmerIconComponent', () => {
  let component: ItDimmerIconComponent;
  let fixture: ComponentFixture<ItDimmerIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItDimmerIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItDimmerIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
