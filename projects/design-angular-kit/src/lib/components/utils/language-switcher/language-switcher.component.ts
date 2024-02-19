import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { map, Observable, startWith } from 'rxjs';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AvailableLanguage } from '../../../interfaces/utils';
import { AsyncPipe } from '@angular/common';
import { ItDropdownModule } from '../../core/dropdown/dropdown.module';

@Component({
  standalone: true,
  selector: 'it-language-switcher',
  templateUrl: './language-switcher.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, TranslateModule, ItDropdownModule],
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
  @Input() mode: 'button' | 'link' | 'nav' = 'link';

  protected currentLang$: Observable<AvailableLanguage | undefined>;

  constructor(private readonly translateService: TranslateService) {
    this.currentLang$ = this.translateService.onLangChange.pipe(
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
        ...(lang === 'en' && { label: 'ENG' }),
      }));
    } else {
      this.translateService.addLangs(this.availableLanguages.map(l => l.code)); // Adds custom languages
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
