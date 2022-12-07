import { CommonModule } from '@angular/common';

import { ItAvatarDirective } from './avatar.directive';
import { NgModule } from "@angular/core";
import { AvatarGroupComponent, ItAvatarGroupItemComponent } from './avatar-group/avatar-group.component';

@NgModule({
    imports:[CommonModule],
    declarations: [ ItAvatarDirective, AvatarGroupComponent, ItAvatarGroupItemComponent],
    exports: [ItAvatarDirective, AvatarGroupComponent, ItAvatarGroupItemComponent]
})
export class ItAvatarModule {}