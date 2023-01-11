import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DimmerPrimaryComponent } from './dimmer-primary.component';

describe('DimmerPrimaryComponent', () => {
  let component: DimmerPrimaryComponent;
  let fixture: ComponentFixture<DimmerPrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DimmerPrimaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DimmerPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
