import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TableColor, TableHeadColor, TableResponsive, VerticalAlignment } from '../../../interfaces/core';
import { inputToBoolean } from '../../../utils/coercion';

@Component({
  selector: 'it-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class ItTableComponent {
  /**
   * Table color
   */
  @Input() color: TableColor | undefined;

  /**
   * Head table color
   */
  @Input() headColor: TableHeadColor | undefined;

  /**
   * Use vertical alignment classes to realign where needed.
   */
  @Input() alignment: VerticalAlignment | undefined;

  /**
   * Use .table-striped to add zebra stripes to each table row contained in <tbody>.
   * @default false
   */
  @Input({ transform: inputToBoolean }) striped?: boolean;

  /**
   * Add .table-hover to enable hover state on table rows contained in <tbody>.
   * @default false
   */
  @Input({ transform: inputToBoolean }) hover?: boolean;

  /**
   * Add .table-bordered to have borders on all sides of the table and on all cells.
   * @default false
   */
  @Input({ transform: inputToBoolean }) bordered?: boolean;

  /**
   * Add the .table-borderless class for a borderless table.
   * @default false
   */
  @Input({ transform: inputToBoolean }) borderless?: boolean;

  /**
   * Add .table-sm to make tables more compact by halving the cell padding.
   * @efault false
   */
  @Input({ transform: inputToBoolean }) compact?: boolean;

  /**
   * To render the <caption> on top of the table
   * @default false
   */
  @Input({ transform: inputToBoolean }) captionTop?: boolean;

  /**
   * Responsive tables allow you to scroll tables horizontally with ease.
   * @default responsive
   */
  @Input() responsive: TableResponsive = 'responsive';
}
