import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DimmerExampleComponent } from './dimmer-example.component';

describe('DimmerExampleComponent', () => {
  let component: DimmerExampleComponent;
  let fixture: ComponentFixture<DimmerExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DimmerExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DimmerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
