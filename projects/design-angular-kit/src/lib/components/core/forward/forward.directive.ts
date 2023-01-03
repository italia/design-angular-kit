import { DOCUMENT } from '@angular/common';
import { Directive, HostListener, Inject, Input } from '@angular/core';

@Directive({
  selector: '[itForward]'
})
export class ForwardDirective {

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
        this.document.querySelector(this.itForward)?.scrollIntoView({
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
