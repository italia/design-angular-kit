import { Component, inject } from '@angular/core';
import { AvailableLanguage } from 'design-angular-kit/interfaces/utils';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'it-language-switcher-custom-example',
  templateUrl: './language-switcher-custom-example.component.html',
  standalone: false,
})
export class LanguageSwitcherCustomExampleComponent {
  private readonly translateService = inject(TranslateService);

  availableLanguages?: Array<AvailableLanguage>;

  constructor() {
    this.availableLanguages = this.translateService.getLangs().map(lang => ({
      code: lang,
      label: lang,
      ...(lang === 'it' && { label: 'Italiano' }),
      ...(lang === 'en' && { label: 'English' }),
    }));
  }
}
