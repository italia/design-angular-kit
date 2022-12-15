import { AvatarRoutingModule } from './avatar-routing.module';
import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { AvatarIndexComponent } from './avatar-index/avatar-index.component';
import { DesignAngularKitModule } from 'projects/design-angular-kit/src/lib/design-angular-kit.module';
import { AvatarExamplesComponent } from './avatar-examples/avatar-examples.component';
import { AvatarExampleSizeComponent } from './avatar-example-size/avatar-example-size.component';
import { AvatarExampleColorsComponent } from './avatar-example-colors/avatar-example-colors.component';
import { AvatarExampleGroupComponent } from './avatar-example-group/avatar-example-group.component';
import { AvatarExampleDropdownComponent } from './avatar-example-dropdown/avatar-example-dropdown.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        AvatarRoutingModule,
        DesignAngularKitModule
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