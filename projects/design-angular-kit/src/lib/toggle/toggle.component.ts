import { Component, Input, Output, EventEmitter, ChangeDetectorRef, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

let identifier = 0;

export class ToggleChange {
  source: ToggleComponent;
  checked: boolean;
}

/**
 * Una toggle con design bootstrap italia. Supporta tutte le funzionalità di una checkbox HTML5,
 * ed espone una API simile. Una `<it-toggle>` può essere checked, unchecked, o disabled.
 */
@Component({
  selector: 'it-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ToggleComponent), multi: true }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleComponent implements ControlValueAccessor {
  /**
   * Se la toggle è selezionata.
   */
  @Input()
  get checked(): boolean { return this._checked; }
  set checked(value: boolean) {
    if (value !== this.checked) {
      this._checked = value;
      this._changeDetectorRef.markForCheck();
    }
  }
  private _checked = false;

  /**
   * L'etichetta della toggle.
   */
  @Input()
  label: string;

  /**
   * Se la toggle è disabilitata.
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
   * Evento emesso quando il valore `checked` della toggle cambia.
   */
  @Output() readonly change: EventEmitter<ToggleChange> =
    new EventEmitter<ToggleChange>();

    inputId = `toggle-${identifier++}`;

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
      this._toggle();
      this._emitChangeEvent();
    }
  }

  private _toggle(): void {
    this.checked = !this.checked;
  }

  private _emitChangeEvent() {
    const event = new ToggleChange();
    event.source = this;
    event.checked = this.checked;

    this._controlValueAccessorChangeFn(this.checked);
    this.change.emit(event);
  }
}
