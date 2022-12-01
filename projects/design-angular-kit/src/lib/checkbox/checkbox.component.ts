import { Component, Input, Output, EventEmitter, ChangeDetectorRef, forwardRef, ChangeDetectionStrategy, ElementRef, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Util } from '../util/util';

let identifier = 0;

export class CheckboxChange {
  source: CheckboxComponent;
  checked: boolean;
}

/**
 * Una checkbox con design bootstrap italia. Supporta tutte le funzionalità di una checkbox HTML5,
 * ed espone una API simile. Una `<it-checkbox>` può essere checked, unchecked, o disabled.
 */
@Component({
  selector: 'it-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CheckboxComponent), multi: true }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent implements ControlValueAccessor {
  
  /** The native `<input type="checkbox">` element */
  @ViewChild('input') _inputElement: ElementRef<HTMLInputElement>;

  /**
   * Indica se la checkbox è selezionata.
   */
  @Input()
  get checked(): boolean { return this._checked; }
  set checked(value: boolean) {
    if (value !== this.checked) {
      this._checked = value;
      if(this._checked) {
        this.indeterminate = false;    
      }
      this._changeDetectorRef.markForCheck();
    }
  }
  private _checked = false;

  /**
   * Indica se la checkbox fa parte di un gruppo, in tal caso L’elemento grafico di spunta verrà allineato alla destra del contenuto testuale.
   */
  @Input()
  get grouped(): boolean { return this._grouped; }
  set grouped(value: boolean) { this._grouped = Util.coerceBooleanProperty(value); }
  private _grouped = false;
  
  /**
   * L'etichetta della checkbox.
   */
  @Input()
  label: string;

  /**
   * Se la checkbox è disabilitata.
   */
  @Input()
  get disabled(): boolean { return this._disabled; }
  set disabled(value: boolean) {
    if (value !== this.disabled) {
      this._disabled = value;
      this._changeDetectorRef.markForCheck();
    }
  }
  private _disabled = false;

  /**
   * Indica se la checkbox deve essere allineata orizzontalmente. 
   * L’elemento grafico di spunta verrà allineato alla destra del contenuto testuale.
   * @default false
   */
  @Input()
  get inline(): boolean { return this._inline; }
  set inline(value: boolean) { this._inline = Util.coerceBooleanProperty(value); }
  private _inline = false;


  /**
   * Indica se la checkbox si trova in uno stato indeterminato, di tipo Mixed
   * @default false
   */
  @Input()
  get indeterminate(): boolean { return this._indeterminate; }
  set indeterminate(value: boolean) { 
    const newValue = Util.coerceBooleanProperty(value); 
    const changed = this._indeterminate !== newValue;
    if(changed) {
      this._indeterminate = newValue;
      this.indeterminateChange.emit(this._indeterminate);
      
      if(this._indeterminate) {
        queueMicrotask(() => {
          this.checked = false;
          this._emitChangeEvent();
        });
    
      }
      
    }
  }

  private _indeterminate = false;

  /**
   * Evento emesso quando il valore `indeterminate` della checkbox cambia.
   */
  @Output() indeterminateChange = new EventEmitter<boolean>();

  
  
  /**
   * Evento emesso quando il valore `checked` della checkbox cambia.
   */
  @Output() readonly change = new EventEmitter<CheckboxChange>();


  focus = false;
  onFocus() {
    this.focus = true;
  }

  onBlur() {
    this.focus = false;
  }

  inputId = `checkbox-${identifier++}`;

  private _onTouched: () => any = () => {};

  private _controlValueAccessorChangeFn: (value: any) => void = () => { };

  constructor(
    private _changeDetectorRef: ChangeDetectorRef
  ) { }

  writeValue(value: any) {
    this.checked = !!value;
  }

  registerOnChange(fn: (value: any) => void) {
    this._controlValueAccessorChangeFn = fn;
  }

  registerOnTouched(fn: any) {
    this._onTouched = fn;
  }

  handleChange(event: Event) {
    event.stopPropagation();
    if (!this.disabled) {
      if(!this.indeterminate) {
        this._toggle();
      } else {
        this.indeterminate = false;
        // reset proprietà "checked" per prevenire il comportamento di default dell'elemento HTML
        this._inputElement.nativeElement.checked = this.checked;
      }
      this._emitChangeEvent();
    }
  }

  private _toggle(): void {
    this.checked = !this.checked;
  }

  private _emitChangeEvent() {
    const event = new CheckboxChange();
    event.source = this;
    event.checked = this.checked;

    this._controlValueAccessorChangeFn(this.checked);
    this.change.emit(event);
  }
}
