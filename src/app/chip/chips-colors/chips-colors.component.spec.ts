import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsColorsComponent } from './chips-colors.component';

describe('ChipsColorsComponent', () => {
  let component: ChipsColorsComponent;
  let fixture: ComponentFixture<ChipsColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChipsColorsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChipsColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
