import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DimmerExamplesComponent } from './dimmer-examples.component';

describe('DimmerExamplesComponent', () => {
  let component: DimmerExamplesComponent;
  let fixture: ComponentFixture<DimmerExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DimmerExamplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DimmerExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
