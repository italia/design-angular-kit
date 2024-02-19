import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItSidebarComponent } from './sidebar.component';
import { tb_base } from '../../../../test';

describe('SidebarComponent', () => {
  let component: ItSidebarComponent;
  let fixture: ComponentFixture<ItSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base).compileComponents();

    fixture = TestBed.createComponent(ItSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
