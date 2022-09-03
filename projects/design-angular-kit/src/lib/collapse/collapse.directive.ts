import { Directive, Input, ElementRef, NgZone, OnInit, OnChanges, SimpleChanges, ChangeDetectorRef, Output, EventEmitter} from '@angular/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { Util } from '../util/util';
import { ItCollapseConfig } from './collapse.config';

/**
 * Per ottimizzare l’ingombro dei contenuti di una pagina si possono usare degli elementi richiudibili
 * (in gergo definiti collassabili o collapse), che possono essere attivati indipendentemente l’uno dall’altro
 */
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[itCollapse]',
  exportAs: 'itCollapse'
})
export class ItCollapseDirective extends NgbCollapse implements OnInit, OnChanges {
  
  constructor(private _cd: ChangeDetectorRef,  _elementRef: ElementRef<HTMLElement>, _config: ItCollapseConfig, _ngZone: NgZone) {
      super(_elementRef, _config, _ngZone);
  }

  ngOnInit(): void {
    super.ngOnInit();
    super.collapsed = Util.coerceBooleanProperty(this.itCollapse);
    super.ngbCollapseChange = this.itCollapseChange;   
    this._cd.detectChanges();
  }

  ngOnChanges({itCollapse}: SimpleChanges): void {
    const coercedValue = Util.coerceBooleanProperty(itCollapse.currentValue);
    super.collapsed = coercedValue;
    super.ngOnChanges({collapsed: itCollapse});
   
  }

  /**
   * La direttiva di collapse che opzionalmente contiene il predicato che ne stabilisce
   * che sarà avvalorato a true quando il collapse è espanso, a false altrimenti
   */
  @Input() itCollapse:boolean;
  @Output() itCollapseChange = new EventEmitter<boolean>();


  get isCollapsed(): boolean {
    return this.collapsed;
  }

  show(): void {
    if(this.isCollapsed) {
      super.toggle();
    }
  }

  hide(): void {
    if(!this.isCollapsed) {
      super.toggle();
    }
  }
}
