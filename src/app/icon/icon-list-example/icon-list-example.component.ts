import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconName, IconNameArray } from 'design-angular-kit/interfaces/icon';

@Component({
  selector: 'it-icon-list-example',
  templateUrl: './icon-list-example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconListExampleComponent {
  iconGroups: Array<{ name?: string; icons: Readonly<Array<IconName>> }>;

  constructor() {
    const indexFile = IconNameArray.indexOf('file');
    const indexPlatform = IconNameArray.indexOf('behance');
    const indexExtra = IconNameArray.indexOf('designers-italia');

    this.iconGroups = [
      {
        icons: indexFile >= 0 ? IconNameArray.slice(0, indexFile) : [],
      },
      {
        name: 'File',
        icons: indexFile >= 0 && indexPlatform >= 0 ? IconNameArray.slice(indexFile, indexPlatform) : [],
      },
      {
        name: 'Piattaforme',
        icons: indexExtra >= 0 && indexPlatform >= 0 ? IconNameArray.slice(indexPlatform, indexExtra) : [],
      },
      {
        name: 'Extra',
        icons: indexExtra >= 0 ? IconNameArray.slice(indexExtra, IconNameArray.length) : [],
      },
    ];
  }
}
