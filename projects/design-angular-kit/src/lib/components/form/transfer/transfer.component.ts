import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ItAbstractFormComponent } from '../../../abstracts/abstract-form.component';

/**
 * Transfer
 * @description Component that allows the creation of checkbox lists.
 */
@Component({
  selector: 'it-transfer',
  standalone: true,
  templateUrl: './transfer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItTransferComponent extends ItAbstractFormComponent {
  readonly title = 'transfer';
}
