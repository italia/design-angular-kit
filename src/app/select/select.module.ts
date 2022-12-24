import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormInputRoutingModule } from './select-routing.module';
import { SelectReactiveFormExampleComponent } from './select-reactive-form-example/select-reactive-form-example.component';
import { SelectExamplesComponent } from './select-examples/select-examples.component';
import { SelectIndexComponent } from './select-index/select-index.component';
import { SharedModule } from '../shared/shared.module';
import { DesignAngularKitModule } from 'projects/design-angular-kit/src/public_api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItSelectModule } from "projects/design-angular-kit/src/lib/select/select.module";
import { SelectDisabledExampleComponent } from './select-disabled-example/select-disabled-example.component';
import { SelectGroupExampleComponent } from './select-group-example/select-group-example.component';
import { SelectSizeExampleComponent } from './select-size-example/select-size-example.component';
import { SelectTemplateDrivenFormExampleComponent } from './select-template-driven-form-example/select-template-driven-form-example.component';

@NgModule({
    declarations: [
        SelectExamplesComponent,
        SelectIndexComponent,
        SelectDisabledExampleComponent,
        SelectGroupExampleComponent,
        SelectSizeExampleComponent,
        SelectTemplateDrivenFormExampleComponent,
        SelectReactiveFormExampleComponent
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
