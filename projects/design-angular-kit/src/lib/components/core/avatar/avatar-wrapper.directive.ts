import { Directive, HostBinding, Input, booleanAttribute } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[itAvatarWrapper]',
  exportAs: 'itAvatarWrapper',
})
export class ItAvatarWrapperDirective {
  @Input({ transform: booleanAttribute }) extraText: boolean = false;

  @HostBinding('class')
  get hostClasses(): string {
    let cssClass = 'avatar-wrapper';

    if (this.extraText) {
      cssClass += ' avatar-extra-text';
    }

    return cssClass;
  }
}
