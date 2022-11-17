
import { Injectable } from '@angular/core';
import { NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';

/**
 * Servizio di configurazione per la direttiva ItPopover.
 * Il servizio può essere iniettato, tipicamente in un root component, per impostare i valori delle proprietà in
 * modo tale da fornire i valori di default per tutti i popover utilizzati in un'applicazione.
 */
@Injectable({providedIn: 'root'})
export class ItTooltipConfig extends NgbTooltipConfig {}
