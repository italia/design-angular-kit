import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { AvatarExampleColorsComponent } from './avatar-example-colors/avatar-example-colors.component';
import { AvatarExampleDropdownComponent } from './avatar-example-dropdown/avatar-example-dropdown.component';
import { AvatarExampleExtraTextComponent } from './avatar-example-extra-text/avatar-example-extra-text.component';
import { AvatarExampleGroupListComponent } from './avatar-example-group-list/avatar-example-group-list.component';
import { AvatarExampleGroupComponent } from './avatar-example-group/avatar-example-group.component';
import { AvatarExampleIconComponent } from './avatar-example-icon/avatar-example-icon.component';
import { AvatarExampleLinkComponent } from './avatar-example-link/avatar-example-link.component';
import { AvatarExamplPresenceComponent } from './avatar-example-presence/avatar-example-presence.component';
import { AvatarExampleSizeComponent } from './avatar-example-size/avatar-example-size.component';
import { AvatarExampleStatusComponent } from './avatar-example-status/avatar-example-status.component';
import { AvatarExamplesComponent } from './avatar-examples/avatar-examples.component';
import { AvatarIndexComponent } from './avatar-index/avatar-index.component';
import { AvatarRoutingModule } from './avatar-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, SharedModule, AvatarRoutingModule],
  declarations: [
    AvatarIndexComponent,
    AvatarExamplesComponent,
    AvatarExampleSizeComponent,
    AvatarExampleColorsComponent,
    AvatarExampleExtraTextComponent,
    AvatarExampleGroupListComponent,
    AvatarExampleGroupComponent,
    AvatarExampleDropdownComponent,
    AvatarExamplPresenceComponent,
    AvatarExampleStatusComponent,
    AvatarExampleIconComponent,
    AvatarExampleLinkComponent,
  ],
})
export class AvatarModule {}
