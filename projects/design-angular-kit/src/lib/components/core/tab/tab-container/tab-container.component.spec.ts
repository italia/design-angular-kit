import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabContainerComponent } from './tab-container.component';
import { tb_base } from '../../../../../test';

describe('TabContainerComponent', () => {
  let component: TabContainerComponent;
  let fixture: ComponentFixture<TabContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base)
    .compileComponents();

    fixture = TestBed.createComponent(TabContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
