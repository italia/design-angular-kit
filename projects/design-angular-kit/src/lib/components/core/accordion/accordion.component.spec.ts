import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItAccordionComponent } from './accordion.component';
import { tb_base } from '../../../../test';

describe('ItAccordionComponent', () => {
  let component: ItAccordionComponent;
  let fixture: ComponentFixture<ItAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base)
      .compileComponents();

    fixture = TestBed.createComponent(ItAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
