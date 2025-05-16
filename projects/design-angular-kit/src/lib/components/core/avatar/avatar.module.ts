import { NgModule } from '@angular/core';
import { ItAvatarDropdownComponent, ItAvatarDropdownItemComponent } from './avatar-dropdown/avatar-dropdown.component';
import { ItAvatarExtraTextDirective } from './avatar-extra-text.directive';
import { ItAvatarGroupComponent, ItAvatarGroupItemComponent, ItAvatarListItemDirective } from './avatar-group/avatar-group.component';
import { ItAvatarPresenceDirective } from './avatar-presence.directive';
import { ItAvatarStatusDirective } from './avatar-status.directive';
import { ItAvatarWrapperDirective } from './avatar-wrapper.directive';
import { ItAvatarDirective } from './avatar.directive';

const avatarComponents = [
  ItAvatarGroupItemComponent,
  ItAvatarGroupComponent,
  ItAvatarDropdownComponent,
  ItAvatarDropdownItemComponent,
  ItAvatarDirective,
  ItAvatarExtraTextDirective,
  ItAvatarWrapperDirective,
  ItAvatarStatusDirective,
  ItAvatarPresenceDirective,
  ItAvatarListItemDirective,
];

@NgModule({
  imports: avatarComponents,
  exports: avatarComponents,
})
export class ItAvatarModule {}
