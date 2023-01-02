import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DimmerWithButtonsComponent } from './dimmer-with-buttons.component';

describe('DimmerWithButtonsComponent', () => {
  let component: DimmerWithButtonsComponent;
  let fixture: ComponentFixture<DimmerWithButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DimmerWithButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DimmerWithButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
