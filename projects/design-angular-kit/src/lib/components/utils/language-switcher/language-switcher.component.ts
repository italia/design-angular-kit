import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { map, Observable, startWith } from 'rxjs';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AvailableLanguage } from '../../../interfaces/utils';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ItDropdownModule } from '../../core/dropdown/dropdown.module';

@Component({
  standalone: true,
  selector: 'it-language-switcher',
  templateUrl: './language-switcher.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgFor, NgIf, AsyncPipe, TranslateModule, ItDropdownModule]
})
export class ItLanguageSwitcherComponent implements OnInit {

  /**
   * The available languages
   * @default The languages available through TranslateService (ngx-translate)
   */
  @Input() availableLanguages: Array<AvailableLanguage> | undefined;

  /**
   * Dropdown mode
   */
  @Input() mode: 'button' | 'link' = 'link';

  protected currentLang$: Observable<AvailableLanguage | undefined>;

  constructor(
    private readonly translateService: TranslateService
  ) {
    this.currentLang$ = translateService.onLangChange.pipe(
      startWith({ lang: translateService.currentLang }),
      map(event => this.availableLanguages?.find(l => l.code === event.lang))
    );
  }

  ngOnInit(): void {
    if (!this.availableLanguages) {
      this.availableLanguages = this.translateService.getLangs().map(lang => ({
        code: lang,
        label: lang,
        ...(lang === 'it' && { label: 'ITA' }),
        ...(lang === 'en' && { label: 'ENG' })
      }));
    }
  }

  /**
   * Change the current language
   * @param lang the language code
   */
  public changeLanguage(lang: string): void {
    this.translateService.use(lang);
  }

}
