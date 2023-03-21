import { Component } from '@angular/core';
import { AvailableLanguage } from '../../../../projects/design-angular-kit/src/lib/interfaces/utils';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'it-language-switcher-custom-example',
  templateUrl: './language-switcher-custom-example.component.html'
})
export class LanguageSwitcherCustomExampleComponent {

  availableLanguages?: Array<AvailableLanguage>;

  constructor(
    private readonly translateService: TranslateService
  ) {
    this.availableLanguages = this.translateService.getLangs().map(lang => ({
      code: lang,
      label: lang,
      ...(lang === 'it' && {label: 'Italiano'}),
      ...(lang === 'en' && {label: 'English'})
    }));
  }
}
