import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TableColor, TableHeadColor, TableResponsive, VerticalAlignment } from '../../../interfaces/core';
import { BooleanInput, isTrueBooleanInput } from '../../../utils/boolean-input';

@Component({
  standalone: true,
  selector: 'it-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: []
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
   */
  @Input() striped: BooleanInput | undefined;

  /**
   * Add .table-hover to enable hover state on table rows contained in <tbody>.
   */
  @Input() hover: BooleanInput | undefined;

  /**
   * Add .table-bordered to have borders on all sides of the table and on all cells.
   */
  @Input() bordered: BooleanInput | undefined;

  /**
   * Add the .table-borderless class for a borderless table.
   */
  @Input() borderless: BooleanInput | undefined;

  /**
   * Add .table-sm to make tables more compact by halving the cell padding.
   */
  @Input() compact: BooleanInput | undefined;

  /**
   * To render the <caption> on top of the table
   */
  @Input() captionTop: BooleanInput | undefined;

  /**
   * Responsive tables allow you to scroll tables horizontally with ease.
   * @default responsive
   */
  @Input() responsive: TableResponsive = 'responsive';


  get isStriped(): boolean {
    return isTrueBooleanInput(this.striped);
  }

  get isHover(): boolean {
    return isTrueBooleanInput(this.hover);
  }

  get isBordered(): boolean {
    return isTrueBooleanInput(this.bordered);
  }

  get isBorderless(): boolean {
    return isTrueBooleanInput(this.borderless);
  }

  get isCompact(): boolean {
    return isTrueBooleanInput(this.compact);
  }

  get isCaptionTop(): boolean {
    return isTrueBooleanInput(this.captionTop);
  }
}
