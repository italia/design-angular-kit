import { ChangeDetectionStrategy, Component, Input, booleanAttribute } from '@angular/core';
import { TableColor, TableHeadColor, TableResponsive, VerticalAlignment } from '../../../interfaces/core';

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
  @Input({ transform: booleanAttribute }) striped?: boolean;

  /**
   * Add .table-hover to enable hover state on table rows contained in <tbody>.
   * @default false
   */
  @Input({ transform: booleanAttribute }) hover?: boolean;

  /**
   * Add .table-bordered to have borders on all sides of the table and on all cells.
   * @default false
   */
  @Input({ transform: booleanAttribute }) bordered?: boolean;

  /**
   * Add the .table-borderless class for a borderless table.
   * @default false
   */
  @Input({ transform: booleanAttribute }) borderless?: boolean;

  /**
   * Add .table-sm to make tables more compact by halving the cell padding.
   * @efault false
   */
  @Input({ transform: booleanAttribute }) compact?: boolean;

  /**
   * To render the <caption> on top of the table
   * @default false
   */
  @Input({ transform: booleanAttribute }) captionTop?: boolean;

  /**
   * Responsive tables allow you to scroll tables horizontally with ease.
   * @default responsive
   */
  @Input() responsive: TableResponsive = 'responsive';
}
