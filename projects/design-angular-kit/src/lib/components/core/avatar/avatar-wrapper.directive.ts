import { Directive, HostBinding, Input } from '@angular/core';
import { inputToBoolean } from '../../../utils/coercion';

@Directive({
  standalone: true,
  selector: '[itAvatarWrapper]',
  exportAs: 'itAvatarWrapper',
})
export class ItAvatarWrapperDirective {
  @Input({ transform: inputToBoolean }) extraText: boolean = false;

  @HostBinding('class')
  get hostClasses(): string {
    let cssClass = 'avatar-wrapper';

    if (this.extraText) {
      cssClass += ' avatar-extra-text';
    }

    return cssClass;
  }
}
