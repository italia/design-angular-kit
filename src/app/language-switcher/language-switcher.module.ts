import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageSwitcherIndexComponent } from './language-switcher-index/language-switcher-index.component';
import { LanguageSwitcherExamplesComponent } from './language-switcher-examples/language-switcher-examples.component';
import { LanguageSwitcherExampleComponent } from './language-switcher-example/language-switcher-example.component';
import { SharedModule } from '../shared/shared.module';
import { LanguageSwitcherRoutingModule } from './language-switcher-routing.module';
import { LanguageSwitcherCustomExampleComponent } from './language-switcher-custom-example/language-switcher-custom-example.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    LanguageSwitcherIndexComponent,
    LanguageSwitcherExamplesComponent,
    LanguageSwitcherExampleComponent,
    LanguageSwitcherCustomExampleComponent,
  ],
  imports: [CommonModule, SharedModule, TranslateModule, LanguageSwitcherRoutingModule],
})
export class LanguageSwitcherModule {}
