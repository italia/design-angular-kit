import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormInputRoutingModule } from './select-routing.module';
import { SelectExampleComponent } from './select-example/select-example.component';
import { SelectExamplesComponent } from './select-examples/select-examples.component';
import { SelectIndexComponent } from './select-index/select-index.component';
import { SharedModule } from '../shared/shared.module';
import { DesignAngularKitModule } from 'projects/design-angular-kit/src/public_api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItSelectModule } from "projects/design-angular-kit/src/lib/select/select.module";
import { SelectDisabledExampleComponent } from './select-disabled-example/select-disabled-example.component';
import { SelectGroupExampleComponent } from './select-group-example/select-group-example.component';

@NgModule({
    declarations: [
        SelectExampleComponent,
        SelectExamplesComponent,
        SelectIndexComponent,
        SelectDisabledExampleComponent,
        SelectGroupExampleComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        DesignAngularKitModule,
        SharedModule,
        FormInputRoutingModule,
        ReactiveFormsModule,
        ItSelectModule
    ]
})
export class SelectModule { }
