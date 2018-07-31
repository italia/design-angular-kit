/**
 * @license
 * Copyright Angular ng-bootstrap team All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/ng-bootstrap/ng-bootstrap/master/LICENSE
 */
import { Injectable } from '@angular/core';
import { PlacementArray } from './positioning';
import { INTERACTION_TRIGGERS } from '../models/InteractionTrigger';

/**
 * Servizio di configurazione per la direttiva ItPopover.
 * Il servizio può essere iniettato, tipicamente in un root component, per impostare i valori delle proprietà in
 * modo tale da fornire i valori di default per tutti i popover utilizzati in un'applicazione.
 */
@Injectable({providedIn: 'root'})
export class PopoverConfig {
  placement: PlacementArray = 'right';
  triggers = INTERACTION_TRIGGERS.CLICK;
  container: string;
  disablePopover = false;
}
