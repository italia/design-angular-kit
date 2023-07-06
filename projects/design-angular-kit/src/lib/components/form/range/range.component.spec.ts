import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItRangeComponent } from './range.component';
import { tb_base } from '../../../../test';

describe('ItRangeComponent', () => {
  let component: ItRangeComponent;
  let fixture: ComponentFixture<ItRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base).compileComponents();

    fixture = TestBed.createComponent(ItRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
