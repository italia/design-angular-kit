import { Component } from "@angular/core";
import Documentation from '../../../assets/documentation.json';


@Component({
    selector: 'it-avatar-index',
    templateUrl: './avatar-index.component.html',
    styleUrls: ['./avatar-index.component.scss']
})
export class AvatarIndexComponent {

    component: any;

    constructor() {
        this.component = (<any>Documentation).directives.find(directive => directive.name === 'ItButtonDirective');
    }

}
