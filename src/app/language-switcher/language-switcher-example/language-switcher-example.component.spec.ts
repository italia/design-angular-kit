import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageSwitcherExampleComponent } from './language-switcher-example.component';

describe('LanguageSwitcherExampleComponent', () => {
  let component: LanguageSwitcherExampleComponent;
  let fixture: ComponentFixture<LanguageSwitcherExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LanguageSwitcherExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LanguageSwitcherExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
