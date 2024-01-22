import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ItAbstractComponent } from '../../../../abstracts/abstract.component';
import { NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'it-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf, TranslateModule]
})
export class ItNavBarItemComponent extends ItAbstractComponent {

  constructor() {
    super();
  }

}
