import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTabContainerComponent } from './tab-container.component';
import { tb_base } from '../../../../../test';

describe('ItTabContainerComponent', () => {
  let component: ItTabContainerComponent;
  let fixture: ComponentFixture<ItTabContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base).compileComponents();

    fixture = TestBed.createComponent(ItTabContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
