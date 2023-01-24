import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {UploadIndexComponent} from "./upload-index/upload-index.component";

const routes: Routes = [
  { path: '', component: UploadIndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadRoutingModule { }
