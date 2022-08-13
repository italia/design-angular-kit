/**
 * @license
 * Copyright Angular ng-bootstrap team All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/ng-bootstrap/ng-bootstrap/master/LICENSE
 */
export class Positioning {
    private getAllStyles(element: HTMLElement) { return window.getComputedStyle(element); }

    private getStyle(element: HTMLElement, prop: string): string { return this.getAllStyles(element)[prop]; }

    private isStaticPositioned(element: HTMLElement): boolean {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    }

    private offsetParent(element: HTMLElement): HTMLElement {
        let offsetParentEl = <HTMLElement>element.offsetParent || document.documentElement;

        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = <HTMLElement>offsetParentEl.offsetParent;
        }

        return offsetParentEl || document.documentElement;
    }

    position(element: HTMLElement, round = true) {
        let elPosition;
        let parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };

        if (this.getStyle(element, 'position') === 'fixed') {
            elPosition = element.getBoundingClientRect();
        } else {
            const offsetParentEl = this.offsetParent(element);

            elPosition = this.offset(element, false);

            if (offsetParentEl !== document.documentElement) {
                parentOffset = this.offset(offsetParentEl, false);
            }

            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
        }

        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;

        if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
        }

        return elPosition;
    }

    offset(element: HTMLElement, round = true) {
        const elBcr = element.getBoundingClientRect();
        const viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
        };

        const elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left
        };

        if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
        }

        return elOffset;
    }

    positionElements(hostElement: HTMLElement, targetElement: HTMLElement, placement: string, appendToBody?: boolean)
         {
        const hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
        const targetElStyles = this.getAllStyles(targetElement);
        const targetElBCR = targetElement.getBoundingClientRect();
        const placementPrimary = placement.split('-')[0] || 'top';
        const placementSecondary = placement.split('-')[1] || 'center';

        const targetElPosition = {
            'height': targetElBCR.height || targetElement.offsetHeight,
            'width': targetElBCR.width || targetElement.offsetWidth,
            'top': 0,
            'bottom': targetElBCR.height || targetElement.offsetHeight,
            'left': 0,
            'right': targetElBCR.width || targetElement.offsetWidth
        };

        switch (placementPrimary) {
            case 'top':
                targetElPosition.top =
                    hostElPosition.top - (targetElement.offsetHeight + parseFloat(targetElStyles.marginBottom));
                break;
            case 'bottom':
                targetElPosition.top = hostElPosition.top + hostElPosition.height;
                break;
            case 'left':
                targetElPosition.left =
                    hostElPosition.left - (targetElement.offsetWidth + parseFloat(targetElStyles.marginRight));
                break;
            case 'right':
                targetElPosition.left = hostElPosition.left + hostElPosition.width;
                break;
        }

        switch (placementSecondary) {
            case 'top':
                targetElPosition.top = hostElPosition.top;
                break;
            case 'bottom':
                targetElPosition.top = hostElPosition.top + hostElPosition.height - targetElement.offsetHeight;
                break;
            case 'left':
                targetElPosition.left = hostElPosition.left;
                break;
            case 'right':
                targetElPosition.left = hostElPosition.left + hostElPosition.width - targetElement.offsetWidth;
                break;
            case 'center':
                if (placementPrimary === 'top' || placementPrimary === 'bottom') {
                    targetElPosition.left = hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2;
                } else {
                    targetElPosition.top = hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2;
                }
                break;
        }

        targetElPosition.top = Math.round(targetElPosition.top);
        targetElPosition.bottom = Math.round(targetElPosition.bottom);
        targetElPosition.left = Math.round(targetElPosition.left);
        targetElPosition.right = Math.round(targetElPosition.right);

        return targetElPosition;
    }

    // Restituisce i collocamenti disponibili per l'elemento target nella viewport in base all'elemento host
    getAvailablePlacements(hostElement: HTMLElement, targetElement: HTMLElement): string[] {
        const availablePlacements: Array<string> = [];
        const hostElemClientRect = hostElement.getBoundingClientRect();
        const targetElemClientRect = targetElement.getBoundingClientRect();
        const html = document.documentElement;
        const windowHeight = window.innerHeight || html.clientHeight;
        const windowWidth = window.innerWidth || html.clientWidth;
        const hostElemClientRectHorCenter = hostElemClientRect.left + hostElemClientRect.width / 2;
        const hostElemClientRectVerCenter = hostElemClientRect.top + hostElemClientRect.height / 2;

        // controlla se la larghezza dell'elemento target può essere collocata tra la sinistra dell'host e l'inizio della viewport
        // e controlla anche se l'altezza del target è nella viewport
        if (targetElemClientRect.width < hostElemClientRect.left) {
            // controlla solo per la sinistra
            if (hostElemClientRectVerCenter > targetElemClientRect.height / 2 &&
                windowHeight - hostElemClientRectVerCenter > targetElemClientRect.height / 2) {
                availablePlacements.splice(availablePlacements.length, 1, 'left');
            }
            // controlla solo per le varianti di sinistra left-top and left-bottom
            this.setSecondaryPlacementForLeftRight(hostElemClientRect, targetElemClientRect, 'left', availablePlacements);
        }

        // controlla se l'altezza del target è minore della cima dell'host
        if (targetElemClientRect.height < hostElemClientRect.top) {
            if (hostElemClientRectHorCenter > targetElemClientRect.width / 2 &&
                windowWidth - hostElemClientRectHorCenter > targetElemClientRect.width / 2) {
                availablePlacements.splice(availablePlacements.length, 1, 'top');
            }
            this.setSecondaryPlacementForTopBottom(hostElemClientRect, targetElemClientRect, 'top', availablePlacements);
        }

        // controlla se la larghezza dell'elemento target può essere collocata tra la destra dell'host e la fine della viewport
        // e controlla anche se l'altezza del target è nella viewport
        if (windowWidth - hostElemClientRect.right > targetElemClientRect.width) {
            // controlla solo per la destra
            if (hostElemClientRectVerCenter > targetElemClientRect.height / 2 &&
                windowHeight - hostElemClientRectVerCenter > targetElemClientRect.height / 2) {
                availablePlacements.splice(availablePlacements.length, 1, 'right');
            }
            // controlla solo per le varianti di destra right-top and right-bottom
            this.setSecondaryPlacementForLeftRight(hostElemClientRect, targetElemClientRect, 'right', availablePlacements);
        }

        // controlla se c'è abbastanza spazio tra la base dell'host e la fine della viewport per l'altezza del target
        if (windowHeight - hostElemClientRect.bottom > targetElemClientRect.height) {
            if (hostElemClientRectHorCenter > targetElemClientRect.width / 2 &&
                windowWidth - hostElemClientRectHorCenter > targetElemClientRect.width / 2) {
                availablePlacements.splice(availablePlacements.length, 1, 'bottom');
            }
            this.setSecondaryPlacementForTopBottom(hostElemClientRect, targetElemClientRect, 'bottom', availablePlacements);
        }

        return availablePlacements;
    }

    /**
     * Controlla se il collocamento secondario per sinistra e destra è disponibile, come left-top, left-bottom, right-top e right-bottom
     * primaryplacement: left|right
     * availablePlacementArr: array con i collocamenti disponibili
     */
    private setSecondaryPlacementForLeftRight(
        hostElemClientRect: ClientRect, targetElemClientRect: ClientRect, primaryPlacement: string,
        availablePlacementArr: Array<string>) {
        const html = document.documentElement;
        // check for left-bottom
        if (targetElemClientRect.height <= hostElemClientRect.bottom) {
            availablePlacementArr.splice(availablePlacementArr.length, 1, primaryPlacement + '-bottom');
        }
        if ((window.innerHeight || html.clientHeight) - hostElemClientRect.top >= targetElemClientRect.height) {
            availablePlacementArr.splice(availablePlacementArr.length, 1, primaryPlacement + '-top');
        }
    }

    /**
     * Controlla se il collocamento secondario per sopra e sotto è disponibile, come top-left, top-right, bottom-left, bottom-right
     * primaryplacement: top|bottom
     * availablePlacementArr: array con i collocamenti disponibili
     */
    private setSecondaryPlacementForTopBottom(
        hostElemClientRect: ClientRect, targetElemClientRect: ClientRect, primaryPlacement: string,
        availablePlacementArr: Array<string>) {
        const html = document.documentElement;
        // check for left-bottom
        if ((window.innerWidth || html.clientWidth) - hostElemClientRect.left >= targetElemClientRect.width) {
            availablePlacementArr.splice(availablePlacementArr.length, 1, primaryPlacement + '-left');
        }
        if (targetElemClientRect.width <= hostElemClientRect.right) {
            availablePlacementArr.splice(availablePlacementArr.length, 1, primaryPlacement + '-right');
        }
    }
}

const positionService = new Positioning();

/*
 * Accetta l'array del collocamento e applica il collocamento adatto in base alla viewport.
 * Ritorna il collocamento applicato.
 * In caso di collocamento auto, i collocamenti sono selezionati in ordine
 *   'top', 'bottom', 'left', 'right',
 *   'top-left', 'top-right',
 *   'bottom-left', 'bottom-right',
 *   'left-top', 'left-bottom',
 *   'right-top', 'right-bottom'.
 * */
export function positionElements(
    hostElement: HTMLElement, targetElement: HTMLElement, placement: string | Placement | PlacementArray,
    appendToBody?: boolean): Placement {
    const placementVals: Array<Placement> = Array.isArray(placement) ? placement : [placement as Placement];

    // Sostituisce il collocamento auto con altri collocamenti
    let hasAuto = placementVals.findIndex(val => val === 'auto');
    if (hasAuto >= 0) {
        ['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right', 'left-top',
            'left-bottom', 'right-top', 'right-bottom',
        ].forEach(function (obj) {
            if (placementVals.find(val => val.search('^' + obj) !== -1) == null) {
                placementVals.splice(hasAuto++, 1, obj as Placement);
            }
        });
    }

    // coordinate per dove posizionare
    let topVal = 0, leftVal = 0;
    let appliedPlacement: Placement;
    // prendere i collocamenti disponibili
    const availablePlacements = positionService.getAvailablePlacements(hostElement, targetElement);
    // iterare sui collocamenti acquisiti
    for (const { item, index } of toItemIndexes(placementVals)) {
        // Controlla se il collocamento passato è presente nel collocamento disponibile, altrimenti applica l'ultimo collocamento nella
        // lista del collocamento passato
        if ((availablePlacements.find(val => val === item) != null) || (placementVals.length === index + 1)) {
            appliedPlacement = <Placement>item;
            const pos = positionService.positionElements(hostElement, targetElement, item, appendToBody);
            topVal = pos.top;
            leftVal = pos.left;
            break;
        }
    }
    targetElement.style.top = `${topVal}px`;
    targetElement.style.left = `${leftVal}px`;
    return appliedPlacement;
}

// Funzione per prendere l'indice e l'oggetto di un array
function toItemIndexes<T>(a: T[]) {
    return a.map((item, index) => ({ item, index }));
}

export type Placement = 'auto' | 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' |
    'bottom-right' | 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom';

export type PlacementArray = Placement | Array<Placement>;
