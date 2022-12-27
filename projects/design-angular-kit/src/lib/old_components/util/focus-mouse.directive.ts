import { Directive, ElementRef, HostListener } from "@angular/core";


/**
 * Aggiunge la classe "focus--mouse" quando viene effettuato il focus sull'elemento a cui è applicata la direttiva
 */
@Directive({
    selector: '[focusMouse]',
    exportAs: 'focusMouse'

})
export class FocusMouseDirective {
    
    constructor(private elementRef: ElementRef) {}
    
    
    @HostListener('focus')
    onFocus(): void {
        (this.elementRef.nativeElement as HTMLElement).classList.add('focus--mouse');
    }

    @HostListener('blur')
    onBlur(): void {
        (this.elementRef.nativeElement as HTMLElement).classList.remove('focus--mouse');
    }
}