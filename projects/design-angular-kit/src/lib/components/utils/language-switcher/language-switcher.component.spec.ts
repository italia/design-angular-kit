import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageSwitcherComponent } from './language-switcher.component';
import { TranslateModule } from '@ngx-translate/core';

describe('LanguageSwitcherComponent', () => {
  let component: LanguageSwitcherComponent;
  let fixture: ComponentFixture<LanguageSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageSwitcherComponent ], imports:[ TranslateModule.forRoot() ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
