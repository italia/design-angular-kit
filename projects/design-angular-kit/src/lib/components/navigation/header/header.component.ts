import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ItAbstractComponent } from '../../../abstracts/abstract.component';
import { NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ItIconComponent } from '../../utils/icon/icon.component';
import { ItButtonDirective } from '../../core/button/button.directive';
import { inputToBoolean } from '../../../utils/coercion';

@Component({
  standalone: true,
  selector: 'it-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf, TranslateModule, ItIconComponent, ItButtonDirective]
})
export class ItHeaderComponent extends ItAbstractComponent {

  @Input({ transform: inputToBoolean }) light?: boolean;

  @Input({ transform: inputToBoolean }) showSlim?: boolean = true;

  @Input() slimTitle: string | undefined;

  @Input() loginStyle: 'none' | 'default' | 'full' = 'none';

  @Input({ transform: inputToBoolean }) smallHeader?: boolean = true;

  @Input({ transform: inputToBoolean }) showSearch?: boolean = true;

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

}
