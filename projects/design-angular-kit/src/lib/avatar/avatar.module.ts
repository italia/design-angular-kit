import { CommonModule } from '@angular/common';

import { ItAvatarDirective } from './avatar.directive';
import { NgModule } from "@angular/core";
import { AvatarGroupComponent, ItAvatarGroupItemComponent } from './avatar-group/avatar-group.component';
import { ItAvatarDropdownComponent, ItAvatarDropDownItemComponent } from './avatar-dropdown/avatar-dropdown.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule, 
        NgbDropdownModule
    ],
    declarations: [
        ItAvatarDirective, 
        AvatarGroupComponent, 
        ItAvatarGroupItemComponent, 
        ItAvatarDropdownComponent, 
        ItAvatarDropDownItemComponent,
    ],
    exports: [
        ItAvatarDirective, 
        AvatarGroupComponent, 
        ItAvatarGroupItemComponent, 
        ItAvatarDropdownComponent, 
        ItAvatarDropDownItemComponent
    ]
})
export class ItAvatarModule { }