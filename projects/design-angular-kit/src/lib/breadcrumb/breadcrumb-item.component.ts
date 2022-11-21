import { Component, Input, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

let identifier = 0;

@Component({
  selector: 'it-breadcrumb-item',
  templateUrl: './breadcrumb-item.component.html',
  styleUrls: ['./breadcrumb-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbItemComponent {
  id = `it-breadcrumb-item-${identifier++}`;

  constructor(private _cdRef: ChangeDetectorRef, private _elemRef: ElementRef) { }

  /**
   * Il link alla pagina verso cui andare al click di questo elemento del breadcrumb
   */
  @Input()
  get link(): string { return this._link; }
  set link(value: string) { this._link = value; }
  private _link: string;

  /**
   * (Opzionale) Icona da usare prima del testo dell'elemento del breadcrumb
   */
  @Input()
  get icon(): string { return this._icon; }
  set icon(value: string) { this._icon = value; }
  private _icon: string;

  /**
   * (Opzionale) Colore da applicare all'icona, se presente.
   */
  @Input()
  get iconColor(): string { return this._iconColor; }
  set iconColor(value: string) { 
    if(this._iconColor !== value) {
      this._iconColor = value;
      this._cdRef.detectChanges();
    }
  }
  private _iconColor: string;

  /**
   * (Opzionanle) Classe CSS da applicare al `breadcrumb-item`
   */
  @Input() customClass: string = '';

  get breadcrumbClass() {
    return 'breadcrumb-item ' + (this.customClass ?? '') + (this.isLast ? ' active' : '');
  }

  get separator(): string { return this._separator; }
  set separator(value: string) { this._separator = value; }
  private _separator: string;

  get isLast(): boolean { return this._isLast; }
  set isLast(value: boolean) {
    this._isLast = value;
    const breadcrumbItem = this._elemRef.nativeElement.querySelector('.breadcrumb-item');
    if (this._isLast) {
      breadcrumbItem.setAttribute('aria-current', 'page');
    } else {
      if (breadcrumbItem.hasAttribute('aria-current')) {
        breadcrumbItem.removeAttribute('aria-current');
      }
    }
    this._cdRef.detectChanges();
  }
  private _isLast = false;


 

}
