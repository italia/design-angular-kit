import {
  Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation, ContentChildren, QueryList
} from '@angular/core';
import { Util } from '../util/util';
import { ThemeColor } from '../models/ThemeColor';
import { DropdownItemComponent } from './dropdown-item.component';
import { IconColorEnum } from '../enums/icons.enum';

let identifier = 0;

const DEFAULT_COLOR = 'dropdown';
export type DropdownMenuPlacement = 'bottom-start' | 'top-start' | 'left-start' | 'right-start';

/**
 * Componente usata per attivare o disattivare overlay contestuali per visualizzare elenchi di link e altro ancora con questi menù a tendina
 */
@Component({
  selector: 'it-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class DropdownComponent {
  id = `dropdown-${identifier++}`;

  @ContentChildren(DropdownItemComponent) menuItems: QueryList<DropdownItemComponent>;


  @Input() menuHeading: string  = "";
  @Input() expandIcon: string | null = "it-expand";
  @Input() expandIconPosition: 'start' | 'end' = 'end';

  private _menuPlacement: DropdownMenuPlacement;
  get menuPlacement() {
    return this._menuPlacement;
  }
  @Input() set menuPlacement(value : DropdownMenuPlacement) {
    if(value === 'left-start') {
      this.expandIconPosition = 'start';
    } else if (value === 'right-start') {
      this.expandIconPosition = 'end';
    }
    this._menuPlacement = value;
  }

  /**
   * Se presente indica che il dropdown utilizza il tema di colorazione scura.
   * Accetta una espressione booleana o può essere usato come attributo senza valore
   */
  @Input()
  get dark(): boolean { return this._dark; }
  set dark(value: boolean) { 
    this._dark = Util.coerceBooleanProperty(value); 
    if(this.autoUpdateMenuItemsIconColor) {
      this.updateMenuItemsIconColor();
    }
  }
  private _dark = false;

  /**
   * Se presente indica che le voci del dropdown si sviluppano orizzontalmente.
   * Accetta una espressione booleana o può essere usato come attributo senza valore
   */
  @Input()
  get fullWidth(): boolean { return this._fullWidth; }
  set fullWidth(value: boolean) { this._fullWidth = Util.coerceBooleanProperty(value); }
  private _fullWidth = false;

  /**
   * Il colore del pulsante che attiva il dropdown.
   * Può assumere i valori primary, secondary, danger, warning, info, warning, success, light e dark
   */
  @Input()
  get color(): any { return this._color; }
  set color(value: any) {
    if (ThemeColor.is(value)) {
      this._color = value;
    } else {
      this._color = DEFAULT_COLOR;
    }
  }
  private _color = DEFAULT_COLOR;

  /**
   * Il testo presente sul pulsante che attiva il dropdown
   */
  @Input()
  get label(): string { return this._label; }
  set label(value: string) { this._label = value; }
  private _label = '';


  /**
   * Evento che viene lanciato ogni volta che il dropdown viene aperto
   */
  @Output()
  get onOpen(): EventEmitter<DropdownComponent> { return this._onOpen; }
  set onOpen(value: EventEmitter<DropdownComponent>) { this._onOpen = value; }
  private _onOpen = new EventEmitter<DropdownComponent>();

  /**
  * Evento che viene lanciato ogni volta che il dropdown viene chiuso
  */
  @Output()
  get onClose(): EventEmitter<DropdownComponent> { return this._onClose; }
  set onClose(value: EventEmitter<DropdownComponent>) { this._onClose = value; }
  private _onClose = new EventEmitter<DropdownComponent>();

  public isOpen: boolean = false;

  onOpenChange(isOpen: boolean) {
    this.isOpen = isOpen;
    if(this.isOpen) {
      this.onOpen.emit();
    } else {
      this.onClose.emit();
    }
  }

  @Input() autoUpdateMenuItemsIconColor: boolean = true;
  private updateMenuItemsIconColor() {
    this.menuItems?.forEach(item => {
      item.iconColor = this._dark ? IconColorEnum.light : IconColorEnum.primary;
    });
  }

  get isDropend(): boolean {
    return this._menuPlacement === 'right-start';
  }

  get isDropstart(): boolean {
    return this._menuPlacement === 'left-start';
  }

  get isDropup(): boolean {
    return this._menuPlacement === 'top-start';
  }



}
