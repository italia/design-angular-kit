import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'it-transfer-list',
  standalone: true,
  imports: [],
  templateUrl: './transfer-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItTransferListComponent {
  @Input()
  items = [];
}
