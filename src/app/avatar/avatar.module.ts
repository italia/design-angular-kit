import { AvatarRoutingModule } from './avatar-routing.module';
import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { AvatarIndexComponent } from './avatar-index/avatar-index.component';
import { AvatarExamplesComponent } from './avatar-examples/avatar-examples.component';
import { AvatarExampleSizeComponent } from './avatar-example-size/avatar-example-size.component';
import { AvatarExampleColorsComponent } from './avatar-example-colors/avatar-example-colors.component';
import { AvatarExampleGroupComponent } from './avatar-example-group/avatar-example-group.component';
import { AvatarExampleDropdownComponent } from './avatar-example-dropdown/avatar-example-dropdown.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        AvatarRoutingModule,
    ],
    declarations: [
        AvatarIndexComponent,
        AvatarExamplesComponent,
        AvatarExampleSizeComponent,
        AvatarExampleColorsComponent,
        AvatarExampleGroupComponent,
        AvatarExampleDropdownComponent
    ]
})
export class AvatarModule { }