import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItLanguageSwitcherComponent } from './language-switcher.component';
import { tb_base } from '../../../../test';

describe('ItLanguageSwitcherComponent', () => {
  let component: ItLanguageSwitcherComponent;
  let fixture: ComponentFixture<ItLanguageSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base)
      .compileComponents();

    fixture = TestBed.createComponent(ItLanguageSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
