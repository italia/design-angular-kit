import { Component } from '@angular/core';

@Component({
  selector: 'it-language-switcher-examples',
  templateUrl: './language-switcher-examples.component.html'
})
export class LanguageSwitcherExamplesComponent {

  readonly typescriptAppModule = "export class AppModule {\n" +
    "  constructor(\n" +
    "    private readonly translateService: TranslateService\n" +
    "  ) {\n" +
    "    translateService.addLangs(['es']);\n" +
    "  }\n" +
    "}";
}
