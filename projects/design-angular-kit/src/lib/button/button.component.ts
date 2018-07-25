import { Component, OnInit, Input, HostBinding, Output, HostListener } from '@angular/core';
import { ThemeColor, THEME_COLORS } from '../models/ThemeColor';
import { ButtonSize, BUTTON_SIZES } from '../models/ButtonSize';
import { EventEmitter } from 'events';


@Component({
  selector: 'it-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input()
  get disabled(): boolean { return this._disabled; }
  set disabled(value: boolean) { this._disabled = value != null && `${value}` !== 'false'; }
  private _disabled = false;

  @Input()
  get outline(): boolean { return this._outline; }
  set outline(value: boolean) { this._outline = value != null && `${value}` !== 'false'; }
  private _outline = false;

  @Input()
  get block(): boolean { return this._block; }
  set block(value: boolean) { this._block = value != null && `${value}` !== 'false'; }
  private _block = false;

  @Input()
  get color(): any {
    return this._color;
  }
  set color(value: any) {
    if (ThemeColor.is(value)) {
      this._color = value;
    }
  }
  private _color;

  @Input()
  get size(): any {
    return this._size;
  }
  set size(value: any) {
    if (ButtonSize.is(value)) {
      this._size = value;
    }
  }
  private _size;

  protected get buttonClass() {
    let cssClass = 'btn';

    if (this.color) {
      if (this.outline) {
        cssClass += ` btn-outline-${this.color}`;
      } else {
        cssClass += ` btn-${this.color}`;
      }
    }

    if (this.size) {
      cssClass += ` btn-${this.size}`;
    }

    if (this.block) {
      cssClass += ' btn-block';
    }

    if (this.disabled) {
      cssClass += ' disabled';
    }

    return cssClass;
  }

  constructor() { }

  ngOnInit() {
  }

}
