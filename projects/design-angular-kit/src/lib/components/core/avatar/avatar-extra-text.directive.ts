import { Directive, HostBinding } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[itAvatarExtraText]',
  exportAs: 'itAvatarExtraText',
})
export class ItAvatarExtraTextDirective {
  @HostBinding('class')
  get hostClasses(): string {
    const cssClass = 'extra-text';
    return cssClass;
  }
}
