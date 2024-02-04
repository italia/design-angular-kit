import { NgModule } from '@angular/core';
import { ItNavBarComponent } from './navbar/navbar.component';
import { ItNavBarItemComponent } from './navbar-item/navbar-item.component';

const navbarComponents = [ItNavBarComponent, ItNavBarItemComponent];

@NgModule({
  imports: navbarComponents,
  exports: navbarComponents,
})
export class ItNavBarModule {}
