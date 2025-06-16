import { Directive, HostListener, Input, DOCUMENT, inject } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[itForward]',
  host: { class: 'forward' },
})
export class ItForwardDirective {
  private document = inject<Document>(DOCUMENT);

  /**
   * Indica, se HTMLElement, l'elemento a cui navigare, o se stringa, il selettore che selezionerà l'elemento a cui navigare.
   */
  @Input() set itForward(value: HTMLElement | string | undefined) {
    this._itForward = value;
  }
  get itForward(): HTMLElement | string | undefined {
    return this._itForward;
  }
  private _itForward: HTMLElement | string | undefined = undefined;

  @HostListener('click', ['$event'])
  onClick(event: any) {
    event.preventDefault();
    if (this.itForward) {
      if (typeof this.itForward === 'string') {
        this.document?.querySelector(this.itForward)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      } else if (this.itForward instanceof HTMLElement) {
        this.itForward.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }
    }
  }
}
