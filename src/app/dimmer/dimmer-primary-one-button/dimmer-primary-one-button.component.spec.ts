import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DimmerPrimaryOneButtonComponent } from './dimmer-primary-one-button.component';

describe('DimmerPrimaryOneButtonComponent', () => {
  let component: DimmerPrimaryOneButtonComponent;
  let fixture: ComponentFixture<DimmerPrimaryOneButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DimmerPrimaryOneButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DimmerPrimaryOneButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
