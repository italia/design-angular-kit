import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { BooleanInput, isTrueBooleanInput } from '../../../utils/boolean-input';
import { AbstractComponent } from '../../../abstracts/abstract.component';

@Component({
  selector: 'it-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent extends AbstractComponent {

  @Input() light?: BooleanInput;

  @Input() showSlim?: BooleanInput = true;

  @Input() slimTitle?: string;

  @Input() loginStyle: 'none' | 'default' | 'full' = 'full';

  @Input() smallHeader?: BooleanInput = true;

  @Input() showSearch?: BooleanInput = true;

  @Output() loginClick: EventEmitter<Event>;

  @Output() searchClick: EventEmitter<Event>;

  /**
   * TODO: complete header
   */
  constructor() {
    super();

    this.loginClick = new EventEmitter<Event>();
    this.searchClick = new EventEmitter<Event>();
  }

  get isLight(): boolean {
    return isTrueBooleanInput(this.light);
  }

  get isShowSlim(): boolean {
    return isTrueBooleanInput(this.showSlim);
  }

  get isSmallHeader(): boolean {
    return isTrueBooleanInput(this.smallHeader);
  }

  get isShowSearch(): boolean {
    return isTrueBooleanInput(this.showSearch);
  }

}
