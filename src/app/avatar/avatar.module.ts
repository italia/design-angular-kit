import { AvatarRoutingModule } from './avatar-routing.module';
import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { AvatarIndexComponent } from './avatar-index/avatar-index.component';
import { DesignAngularKitModule } from 'projects/design-angular-kit/src/lib/design-angular-kit.module';
import { AvatarExamplesComponent } from './avatar-examples/avatar-examples.component';
import { AvatarExampleSizeComponent } from './avatar-example-size/avatar-example-size.component';

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
        AvatarExampleSizeComponent
    ]
})
export class AvatarModule { }