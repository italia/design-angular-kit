import { CommonModule } from '@angular/common';

import { ItAvatarDirective } from './avatar.directive';
import { NgModule } from "@angular/core";
import { AvatarGroupComponent, ItAvatarGroupItemComponent } from './avatar-group/avatar-group.component';
import { AvatarDropdownComponent } from './avatar-dropdown/avatar-dropdown.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports:[CommonModule, NgbDropdownModule],
    declarations: [ ItAvatarDirective, AvatarGroupComponent, ItAvatarGroupItemComponent, AvatarDropdownComponent],
    exports: [ItAvatarDirective, AvatarGroupComponent, ItAvatarGroupItemComponent, AvatarDropdownComponent]
})
export class ItAvatarModule {}