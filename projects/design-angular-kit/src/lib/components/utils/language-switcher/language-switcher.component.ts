import { Component, Input, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { AvailableLanguage } from '../../../interfaces/utils';

@Component({
  selector: 'it-language-switcher',
  templateUrl: './language-switcher.component.html'
})
export class LanguageSwitcherComponent implements OnInit {

  /**
   * The available languages
   * @default The languages available through TranslateService (ngx-translate)
   */
  @Input() availableLanguages?: Array<AvailableLanguage>;

  currentLang$: Observable<AvailableLanguage | undefined>;

  constructor(
    private readonly translateService: TranslateService
  ) {
    this.currentLang$ = translateService.onLangChange.pipe(
      map(event => this.availableLanguages?.find(l => l.code === event.lang))
    );
  }

  ngOnInit(): void {
    if (!this.availableLanguages) {
      this.availableLanguages = this.translateService.getLangs().map(lang => ({
        code: lang,
        label: lang,
        ...(lang === 'it' && {label: 'ITA'}),
        ...(lang === 'en' && {label: 'ENG'})
      }));
    }
  }

  /**
   * Change the current language
   * @param lang the language code
   */
  changeLanguage(lang: string): void {
    this.translateService.use(lang);
  }

}
