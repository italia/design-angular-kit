import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ItLanguageSwitcherComponent } from './language-switcher.component';
import { tb_base } from '../../../../test';
import { AvailableLanguage } from '../../../interfaces/utils';

@Component({
  selector: 'it-lang-switch-host',
  standalone: true,
  imports: [ItLanguageSwitcherComponent],
  template: `<it-language-switcher [availableLanguages]="langs" [mode]="mode"></it-language-switcher>`,
})
class LangSwitchHostComponent {
  langs: AvailableLanguage[] | undefined;
  mode: 'button' | 'link' | 'nav' = 'link';
}

describe('ItLanguageSwitcherComponent', () => {
  let component: ItLanguageSwitcherComponent;
  let fixture: ComponentFixture<ItLanguageSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base).compileComponents();

    fixture = TestBed.createComponent(ItLanguageSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('default language initialization', () => {
    it('should show current language label on init, not fallback text', () => {
      const translateService = TestBed.inject(TranslateService);
      translateService.addLangs(['it', 'en']);
      translateService.use('it');

      // Create a fresh component after setting up the language
      const freshFixture = TestBed.createComponent(ItLanguageSwitcherComponent);
      freshFixture.detectChanges();

      const el: HTMLElement = freshFixture.nativeElement;
      const buttonText = el.querySelector('.dropdown span:not(.visually-hidden)')?.textContent?.trim();

      // Must NOT show fallback "Seleziona una lingua"
      expect(buttonText).toBeTruthy();
      expect(buttonText).toBe('ITA');
    });

    it('should resolve availableLanguages from TranslateService when not provided', () => {
      const translateService = TestBed.inject(TranslateService);
      translateService.addLangs(['it', 'en', 'fr']);
      translateService.use('en');

      const freshFixture = TestBed.createComponent(ItLanguageSwitcherComponent);
      freshFixture.detectChanges();

      expect(freshFixture.componentInstance.availableLanguages).toBeDefined();
      expect(freshFixture.componentInstance.availableLanguages!.length).toBe(3);
      expect(freshFixture.componentInstance.availableLanguages!.find(l => l.code === 'it')?.label).toBe('ITA');
      expect(freshFixture.componentInstance.availableLanguages!.find(l => l.code === 'en')?.label).toBe('ENG');
      expect(freshFixture.componentInstance.availableLanguages!.find(l => l.code === 'fr')?.label).toBe('fr');
    });

    it('should show ENG when current language is English', () => {
      const translateService = TestBed.inject(TranslateService);
      translateService.addLangs(['it', 'en']);
      translateService.use('en');

      const freshFixture = TestBed.createComponent(ItLanguageSwitcherComponent);
      freshFixture.detectChanges();

      const el: HTMLElement = freshFixture.nativeElement;
      const buttonText = el.querySelector('.dropdown span:not(.visually-hidden)')?.textContent?.trim();
      expect(buttonText).toBe('ENG');
    });
  });

  describe('custom availableLanguages input', () => {
    it('should use provided availableLanguages and register them with TranslateService', () => {
      const translateService = TestBed.inject(TranslateService);
      translateService.use('de');

      const hostFixture = TestBed.createComponent(LangSwitchHostComponent);
      hostFixture.componentInstance.langs = [
        { code: 'de', label: 'Deutsch' },
        { code: 'fr', label: 'Français' },
      ];
      hostFixture.detectChanges();

      const langs = translateService.getLangs();
      expect(langs).toContain('de');
      expect(langs).toContain('fr');

      const el: HTMLElement = hostFixture.nativeElement;
      const buttonText = el.querySelector('.dropdown span:not(.visually-hidden)')?.textContent?.trim();
      expect(buttonText).toBe('Deutsch');
    });
  });

  describe('language switching', () => {
    it('should update displayed language when changeLanguage is called', fakeAsync(() => {
      const translateService = TestBed.inject(TranslateService);
      translateService.addLangs(['it', 'en']);
      translateService.use('it');

      const freshFixture = TestBed.createComponent(ItLanguageSwitcherComponent);
      freshFixture.detectChanges();

      const el: HTMLElement = freshFixture.nativeElement;
      let buttonText = el.querySelector('.dropdown span:not(.visually-hidden)')?.textContent?.trim();
      expect(buttonText).toBe('ITA');

      // Switch language
      freshFixture.componentInstance.changeLanguage('en');
      tick();
      freshFixture.detectChanges();

      buttonText = el.querySelector('.dropdown span:not(.visually-hidden)')?.textContent?.trim();
      expect(buttonText).toBe('ENG');
    }));

    it('should mark the active language in the dropdown list', fakeAsync(() => {
      const translateService = TestBed.inject(TranslateService);
      translateService.addLangs(['it', 'en']);
      translateService.use('it');

      const freshFixture = TestBed.createComponent(ItLanguageSwitcherComponent);
      freshFixture.detectChanges();

      const el: HTMLElement = freshFixture.nativeElement;
      const items = el.querySelectorAll('it-dropdown-item');
      expect(items.length).toBe(2);
    }));
  });
});
