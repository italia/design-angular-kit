import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DimmerIconComponent } from './dimmer-icon.component';

describe('DimmerIconComponent', () => {
  let component: DimmerIconComponent;
  let fixture: ComponentFixture<DimmerIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DimmerIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DimmerIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
