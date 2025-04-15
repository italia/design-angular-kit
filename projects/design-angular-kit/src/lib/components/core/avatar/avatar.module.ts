import { NgModule } from '@angular/core';
import { ItAvatarDropdownComponent, ItAvatarDropdownItemComponent } from './avatar-dropdown/avatar-dropdown.component';
import { ItAvatarExtraTextDirective } from './avatar-extra-text.directive';
import { ItAvatarGroupComponent, ItAvatarGroupItemComponent } from './avatar-group/avatar-group.component';
import { ItAvatarWrapperDirective } from './avatar-wrapper.directive';
import { ItAvatarDirective } from './avatar.directive';
import { ItAvatarStatusDirective } from './avatar-status.directive';
import { ItAvatarPresenceDirective } from './avatar-presence.directive';

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
];

@NgModule({
  imports: avatarComponents,
  exports: avatarComponents,
})
export class ItAvatarModule {}
