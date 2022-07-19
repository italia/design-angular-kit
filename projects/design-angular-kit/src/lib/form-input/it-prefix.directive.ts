import { Directive, Input } from "@angular/core";

@Directive({
    selector: '[itPrefix]'
})
export class ItPrefix {
    private _type: 'text' | 'action';
    get type (){
        return this._type;
    }
    @Input('itPrefix') set type(newType: 'text' | 'action' ) {
        this._type = newType || 'text';
    }
}