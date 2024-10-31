import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DesignAngularKitModule } from 'projects/design-angular-kit/src/public_api';
import { NavscrollExampleComponent } from './navscroll-example.component';

@NgModule({
  declarations: [NavscrollExampleComponent],
  exports: [NavscrollExampleComponent],
  imports: [DesignAngularKitModule, RouterModule],
})
export class NavscrollExampleModule {}
