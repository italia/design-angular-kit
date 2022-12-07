import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DesignAngularKitModule } from 'projects/design-angular-kit/src/public_api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableOfContentComponent } from './table-of-content/table-of-content.component';
import { TableOfContentItemComponent } from './table-of-content-item/table-of-content-item.component';
import { RouterDispatcherComponent } from './router-dispatcher/router-dispatcher.component';
import { LinkSortPipe } from './link-sort.pipe';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { TabsModule } from './tabs/tabs.module';
import { ItTabsModule } from 'projects/design-angular-kit/src/lib/tabs/tabs.module';

@NgModule({
  declarations: [
    AppComponent,
    TableOfContentComponent,
    TableOfContentItemComponent,
    RouterDispatcherComponent,
    LinkSortPipe,

  ],
  imports: [
    BrowserModule,
    DesignAngularKitModule,
    ItTabsModule,
    AppRoutingModule
  ],
  providers: [{
    provide: HIGHLIGHT_OPTIONS,
    useValue: {
      coreLibraryLoader: () => import('highlight.js/lib/core'),
      languages: {
        typescript: () => import('highlight.js/lib/languages/typescript'),
        HTML: () => import('highlight.js/lib/languages/xml'),
        scss: () => import('highlight.js/lib/languages/scss')
      }
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
