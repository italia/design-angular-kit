import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItLinkComponent } from './link.component';
import { tb_base } from '../../../../test';

describe('ItLinkComponent', () => {
  let component: ItLinkComponent;
  let fixture: ComponentFixture<ItLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base).compileComponents();

    fixture = TestBed.createComponent(ItLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
