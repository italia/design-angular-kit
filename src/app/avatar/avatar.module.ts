import { AvatarRoutingModule } from './avatar-routing.module';
import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { AvatarIndexComponent } from './avatar-index/avatar-index.component';
import { DesignAngularKitModule } from 'projects/design-angular-kit/src/lib/design-angular-kit.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        AvatarRoutingModule,
        DesignAngularKitModule
    ],
    declarations: [
        AvatarIndexComponent
    ]
})
export class AvatarModule { }