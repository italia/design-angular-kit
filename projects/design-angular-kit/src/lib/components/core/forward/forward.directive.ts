import { DOCUMENT } from '@angular/common';
import { Directive, HostListener, Inject, Input } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[itForward]',
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {'class': 'forward'}
})
export class ForwardDirective {

  /**
   * Indica, se HTMLElement, l'elemento a cui navigare, o se stringa, il selettore che selezionerà l'elemento a cui navigare.
  */
  @Input() set itForward(value: HTMLElement | string | undefined) { this._itForward = value; }
  get itForward(): HTMLElement | string | undefined { return this._itForward; }
  private _itForward: HTMLElement | string | undefined = undefined;

  constructor(
    @Inject(DOCUMENT) private document?: Document
  ) { }

  @HostListener('click', ['$event'])
  onClick(event: any) {
    event.preventDefault();
    if (this.itForward) {
      if (typeof this.itForward === 'string') {
        this.document?.querySelector(this.itForward)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: "nearest"
        })
      } else if (this.itForward instanceof HTMLElement) {
        this.itForward.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: "nearest"
        });
      }
    }
  }

}
