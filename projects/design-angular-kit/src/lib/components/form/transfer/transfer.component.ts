import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'it-transfer',
  standalone: true,
  templateUrl: './transfer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItTransferComponent {
  readonly title = 'transfer';
}
