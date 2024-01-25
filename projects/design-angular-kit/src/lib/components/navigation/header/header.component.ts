import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {BooleanInput, isTrueBooleanInput} from '../../../utils/boolean-input';
import {ItAbstractComponent} from '../../../abstracts/abstract.component';
import {NgIf} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {ItIconComponent} from '../../utils/icon/icon.component';
import {ItButtonDirective} from '../../core/button/button.directive';
import {ItLanguageSwitcherComponent} from '../../utils/language-switcher/language-switcher.component';
import {ItMenuConfig} from '../menu/menu.interface';
import {ItMenusModule} from '../menu/menu.module';
import {IconName} from "../../../interfaces/icon";

@Component({
  standalone: true,
  selector: 'it-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf, TranslateModule, ItIconComponent, ItLanguageSwitcherComponent, ItMenusModule, ItButtonDirective]
})
export class ItHeaderComponent extends ItAbstractComponent {

  @Input() light: BooleanInput | undefined;

  @Input() darkMobile: BooleanInput | undefined;

  @Input() slimHeader?: BooleanInput = false;

  @Input() mainHeader?: BooleanInput = true;

  @Input() compactHeader?: BooleanInput = false;

  @Input() slimTitle: string | undefined;

  @Input() mainNavigation: ItMenuConfig | undefined;

  @Input() secondaryNavigation: ItMenuConfig | undefined;

  @Input() socialNavigation: ItMenuConfig | undefined;

  @Input() loginStyle: 'none' | 'default' | 'full' = 'default';

  @Input() smallHeader?: BooleanInput = true;

  @Input() showSearch?: BooleanInput = true;

  @Input() title: string | undefined;

  @Input() subTitle: string | undefined;

  @Input() titleIcon: IconName = "pa"

  @Output() loginClick: EventEmitter<Event>;

  @Output() searchClick: EventEmitter<Event>;

  constructor() {
    super();

    this.loginClick = new EventEmitter<Event>();
    this.searchClick = new EventEmitter<Event>();
  }

  get isLight(): boolean {
    return isTrueBooleanInput(this.light);
  }

  get isDarkMobile(): boolean {
    return isTrueBooleanInput(this.darkMobile);
  }

  get isSlimHeader(): boolean {
    return isTrueBooleanInput(this.slimHeader);
  }

  get isMainHeader(): boolean {
    return isTrueBooleanInput(this.mainHeader);
  }

  get isCompactHeader(): boolean {
    return isTrueBooleanInput(this.compactHeader);
  }

  get isSmallHeader(): boolean {
    return isTrueBooleanInput(this.smallHeader);
  }

  get isShowSearch(): boolean {
    return isTrueBooleanInput(this.showSearch);
  }

  showMainNavigation(): boolean {
    return (this.mainNavigation !== undefined);
  }

  showSecondaryNavigation(): boolean {
    return (this.secondaryNavigation !== undefined);
  }

  showSocialNavigation(): boolean {
    return (this.socialNavigation !== undefined);
  }

}
