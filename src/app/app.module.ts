import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TranslateStore } from '@ngx-translate/core';
import { DesignAngularKitModule } from 'design-angular-kit/design-angular-kit.module';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinkSortPipe } from './link-sort.pipe';
import { NavscrollTbComponent } from './navscroll-tb.component';
import { RouterDispatcherComponent } from './router-dispatcher/router-dispatcher.component';
import { TableOfContentItemComponent } from './table-of-content-item/table-of-content-item.component';
import { TableOfContentComponent } from './table-of-content/table-of-content.component';

@NgModule({
  declarations: [
    AppComponent,
    TableOfContentComponent,
    TableOfContentItemComponent,
    RouterDispatcherComponent,
    LinkSortPipe,
    NavscrollTbComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, DesignAngularKitModule.forRoot()],
  providers: [
    TranslateStore,
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          HTML: () => import('highlight.js/lib/languages/xml'),
          scss: () => import('highlight.js/lib/languages/scss'),
        },
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
