import { ChangeDetectionStrategy, Component } from "@angular/core";


@Component({
    selector: 'it-popover-test',
    templateUrl: 'ng-popover.component.html',
    host: { 'class': 'd-block' }
})
export class NgPopoverComponent {
    constructor() {}
}