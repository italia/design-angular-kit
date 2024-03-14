import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsExamplesComponent } from './chips-examples.component';

describe('ChipsExamplesComponent', () => {
  let component: ChipsExamplesComponent;
  let fixture: ComponentFixture<ChipsExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChipsExamplesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChipsExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
