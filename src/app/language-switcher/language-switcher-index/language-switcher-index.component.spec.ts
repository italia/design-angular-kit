import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageSwitcherIndexComponent } from './language-switcher-index.component';

describe('LanguageSwitcherIndexComponent', () => {
  let component: LanguageSwitcherIndexComponent;
  let fixture: ComponentFixture<LanguageSwitcherIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageSwitcherIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageSwitcherIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
