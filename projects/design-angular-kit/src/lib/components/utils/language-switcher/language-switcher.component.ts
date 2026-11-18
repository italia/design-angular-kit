import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Input, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { map, Observable, startWith } from 'rxjs';
import { AvailableLanguage } from '../../../interfaces/utils';
import { ItDropdownModule } from '../../core/dropdown/dropdown.module';

@Component({
  selector: 'it-language-switcher',
  templateUrl: './language-switcher.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, TranslateModule, ItDropdownModule],
})
export class ItLanguageSwitcherComponent implements OnInit {
  private readonly translateService = inject(TranslateService);

  /**
   * The available languages
   * @default The languages available through TranslateService (ngx-translate)
   */
  @Input() availableLanguages: Array<AvailableLanguage> | undefined;

  /**
   * Dropdown mode
   */
  @Input() mode: 'button' | 'link' | 'nav' = 'link';

  protected currentLang$!: Observable<AvailableLanguage | undefined>;

  ngOnInit(): void {
    if (!this.availableLanguages) {
      this.availableLanguages = this.translateService.getLangs().map(lang => ({
        code: lang,
        label: lang,
        ...(lang === 'it' && { label: 'ITA' }),
        ...(lang === 'en' && { label: 'ENG' }),
      }));
    } else {
      this.translateService.addLangs(this.availableLanguages.map(l => l.code));
    }

    // Initialize after availableLanguages is resolved so the first
    // emission from startWith can correctly match the active language.
    this.currentLang$ = this.translateService.onLangChange.pipe(
      startWith({ lang: this.translateService.getCurrentLang() }),
      map(event => this.availableLanguages?.find(l => l.code === event.lang))
    );
  }

  /**
   * Change the current language
   * @param lang the language code
   */
  public changeLanguage(lang: string): void {
    this.translateService.use(lang);
  }
}
