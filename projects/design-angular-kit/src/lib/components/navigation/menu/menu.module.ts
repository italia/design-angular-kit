import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ItIconComponent } from '../../utils/icon/icon.component';
import { ItMenuDropdownComponent } from './components/dropdown/dropdown.component';
import { ItAbstractMenuComponent } from './components/abstract-menu/abstract-menu.component';

@NgModule({
  imports: [
	CommonModule,
	TranslateModule,
	ItIconComponent,
	
  ],
  declarations: [
	ItAbstractMenuComponent,
	ItMenuDropdownComponent,

  ],
  exports: [
	ItAbstractMenuComponent,
	
  ]
})
export class ItMenusModule {
}
