import { NgModule } from '@angular/core';
import { ItAvatarGroupComponent, ItAvatarGroupItemComponent } from './avatar-group/avatar-group.component';
import { ItAvatarDropdownComponent, ItAvatarDropdownItemComponent } from './avatar-dropdown/avatar-dropdown.component';
import { ItAvatarDirective } from './avatar.directive';

const avatarComponents = [
  ItAvatarGroupItemComponent,
  ItAvatarGroupComponent,
  ItAvatarDropdownComponent,
  ItAvatarDropdownItemComponent,
  ItAvatarDirective,
];

@NgModule({
  imports: avatarComponents,
  exports: avatarComponents,
})
export class ItAvatarModule {}
