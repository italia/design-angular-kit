import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TableColor, TableHeadColor, TableResponsive, VerticalAlignment } from '../../../interfaces/core';
import { BooleanInput, isTrueBooleanInput } from '../../../utils/boolean-input';

@Component({
  selector: 'it-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent {

  /**
   * Table color
   */
  @Input() color?: TableColor;

  /**
   * Head table color
   */
  @Input() headColor?: TableHeadColor;

  /**
   * Use vertical alignment classes to realign where needed.
   */
  @Input() alignment?: VerticalAlignment;

  /**
   * Use .table-striped to add zebra stripes to each table row contained in <tbody>.
   */
  @Input() striped?: BooleanInput;

  /**
   * Add .table-hover to enable hover state on table rows contained in <tbody>.
   */
  @Input() hover?: BooleanInput;

  /**
   * Add .table-bordered to have borders on all sides of the table and on all cells.
   */
  @Input() bordered?: BooleanInput;

  /**
   * Add the .table-borderless class for a borderless table.
   */
  @Input() borderless?: BooleanInput;

  /**
   * Add .table-sm to make tables more compact by halving the cell padding.
   */
  @Input() compact?: BooleanInput;

  /**
   * To render the <caption> on top of the table
   */
  @Input() captionTop?: BooleanInput;

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
