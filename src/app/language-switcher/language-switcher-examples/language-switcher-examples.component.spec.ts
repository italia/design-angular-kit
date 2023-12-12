import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageSwitcherExamplesComponent } from './language-switcher-examples.component';

describe('LanguageSwitcherExamplesComponent', () => {
  let component: LanguageSwitcherExamplesComponent;
  let fixture: ComponentFixture<LanguageSwitcherExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageSwitcherExamplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageSwitcherExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
