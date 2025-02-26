import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-icon-index',
  templateUrl: './icon-index.component.html',
  standalone: false,
})
export class IconIndexComponent {
  component: any;

  readonly hrefLibraryConfig =
    "import {DesignAngularKitModule, DesignAngularKitInit} from 'design-angular-kit';\n" +
    '  \n' +
    '  const initConfig: DesignAngularKitInit = {\n' +
    '    /**\n' +
    '     * The initial path in the `href` attribute in the `IconComponent` component\n' +
    "     * @default './bootstrap-italia/dist/svg/sprites.svg'\n" +
    '     */\n' +
    "    iconHref: 'my-path/svg/sprites.svg',\n" +
    '  };\n' +
    '  \n' +
    '  @NgModule({\n' +
    '    imports: [\n' +
    '      ...\n' +
    '      DesignAngularKitModule.forRoot(initConfig)\n' +
    '    ]\n' +
    '  })';

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'ItIconComponent');
  }
}
