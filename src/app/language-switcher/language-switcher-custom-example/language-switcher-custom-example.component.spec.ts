import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageSwitcherCustomExampleComponent } from './language-switcher-custom-example.component';

describe('LanguageSwitcherCustomExampleComponent', () => {
  let component: LanguageSwitcherCustomExampleComponent;
  let fixture: ComponentFixture<LanguageSwitcherCustomExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageSwitcherCustomExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageSwitcherCustomExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
