import { Directive, Input } from "@angular/core";

@Directive({
    selector: '[itSuffix]'
})
export class itSuffix {
    private _type: 'text' | 'action';
    get type (){
        return this._type;
    }
    @Input('itSuffix') set type(newType: 'text' | 'action' ) {
        this._type = newType || 'action';
    }
}