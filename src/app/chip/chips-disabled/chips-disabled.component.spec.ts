import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsDisabledComponent } from './chips-disabled.component';

describe('ChipsDisabledComponent', () => {
  let component: ChipsDisabledComponent;
  let fixture: ComponentFixture<ChipsDisabledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipsDisabledComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipsDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
