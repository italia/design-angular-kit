import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItErrorPageComponent } from './error-page.component';
import { tb_base } from '../../../../test';

describe('ItErrorPageComponent', () => {
  let component: ItErrorPageComponent;
  let fixture: ComponentFixture<ItErrorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base).compileComponents();

    fixture = TestBed.createComponent(ItErrorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
