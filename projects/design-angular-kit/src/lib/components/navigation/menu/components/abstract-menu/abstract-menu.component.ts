import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ItAbstractComponent} from 'projects/design-angular-kit/src/lib/abstracts/abstract.component';
import {ItMenuConfig, ItMenuItem} from '../../menu.interface';

@Component({
  selector: 'it-menu',
  templateUrl: './abstract-menu.component.html',
  styleUrls: ['./abstract-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItAbstractMenuComponent extends ItAbstractComponent {

  /**
   * Configuration of menu to display
   */
  @Input({required: true}) menuConfig!: ItMenuConfig;

  /**
   * DEPRECATION - passare valori statici: nome regione (con link), nome comune (con link), slogan comune
   */
  @Input() slimTitle: string | undefined;


  isMegamenu(menuItem: ItMenuItem) {
    return menuItem.type == 'megamenu';

  }

  isDropdown(menuItem: ItMenuItem) {
    return menuItem.type == 'dropdown';

  }

  isLink(menuItem: ItMenuItem) {
    return menuItem.type == 'link';

  }

  isDivider(menuItem: ItMenuItem) {
    return menuItem.type == 'divider';

  }

  isIcon(menuItem: ItMenuItem) {
    console.log(menuItem);
    return menuItem.type == 'icon';

  }

  isText(menuItem: ItMenuItem) {
    return menuItem.type == 'text';
  }

  isLinkDisabled(disabled: boolean){
    return disabled;
  }

  isLinkActive(link: string) {
    return link == window.location.href;
  }
}
