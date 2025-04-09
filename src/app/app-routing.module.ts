import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItErrorPageComponent } from 'design-angular-kit/components/utils/error-page/error-page.component';
import { EXAMPLES_ROUTES } from './examples/routes';
import { RouterDispatcherComponent } from './router-dispatcher/router-dispatcher.component';

const routes: Routes = [
  { path: '', redirectTo: 'info', pathMatch: 'full' },
  {
    path: 'info',
    component: RouterDispatcherComponent,
    children: [
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: 'welcome', loadChildren: () => import('src/app/welcome/welcome.module').then(m => m.WelcomeModule) },
    ],
  },
  {
    path: 'organizzare-i-contenuti',
    component: RouterDispatcherComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', loadChildren: () => import('src/app/list/list.module').then(m => m.ListModule) },
      { path: 'table', loadChildren: () => import('src/app/table/table.module').then(m => m.TableModule) },
    ],
  },
  {
    path: 'menu-di-navigazione',
    component: RouterDispatcherComponent,
    children: [
      { path: '', redirectTo: 'back-to-top', pathMatch: 'full' },
      { path: 'back-to-top', loadChildren: () => import('src/app/back-to-top/back-to-top.module').then(m => m.BackToTopModule) },
      { path: 'breadcrumb', loadChildren: () => import('src/app/breadcrumb/breadcrumb.module').then(m => m.BreadcrumbModule) },
      { path: 'header', loadChildren: () => import('src/app/header/header.module').then(m => m.HeaderModule) },
      { path: 'back-button', loadChildren: () => import('src/app/back-button/back-button.module').then(m => m.BackButtonModule) },
      { path: 'forward', loadChildren: () => import('src/app/forward/forward.module').then(m => m.ForwardModule) },
      { path: 'megamenu', loadChildren: () => import('src/app/megamenu/megamenu.module').then(m => m.MegamenuModule) },
      { path: 'sidebar', loadChildren: () => import('src/app/sidebar/sidebar.module').then(m => m.SidebarModule) },
      { path: 'skiplink', loadChildren: () => import('src/app/skiplink/skiplink.module').then(m => m.SkiplinkModule) },
      { path: 'navscroll', loadChildren: () => import('src/app/navscroll/navscroll.module').then(m => m.NavscrollModule) },
    ],
  },
  {
    path: 'form',
    component: RouterDispatcherComponent,
    children: [
      { path: '', redirectTo: 'form-input', pathMatch: 'full' },
      { path: 'form-input', loadChildren: () => import('src/app/form-input/form-input.module').then(m => m.FormInputModule) },
      { path: 'autocomplete', loadChildren: () => import('src/app/autocomplete/autocomplete.module').then(m => m.AutocompleteModule) },

      { path: 'textarea', loadChildren: () => import('src/app/textarea/textarea.module').then(m => m.TextareaModule) },
      { path: 'checkbox', loadChildren: () => import('src/app/checkbox/checkbox.module').then(m => m.CheckboxModule) },
      { path: 'radio', loadChildren: () => import('src/app/radio/radio.module').then(m => m.RadioModule) },
      {
        path: 'password-input',
        loadChildren: () => import('src/app/password-input/password-input.module').then(m => m.PasswordInputModule),
      },
      { path: 'select', loadChildren: () => import('src/app/select/select.module').then(m => m.SelectModule) },
      { path: 'search', loadChildren: () => import('src/app/search/search.module').then(m => m.SearchModule) },
      { path: 'toggle', loadChildren: () => import('src/app/toggle/toggle.module').then(m => m.ToggleModule) },
      { path: 'transfer', loadChildren: () => import('src/app/transfer/transfer.module').then(m => m.TransferModule) },
      { path: 'upload', loadChildren: () => import('src/app/upload/upload.module').then(m => m.UploadModule) },
    ],
  },
  {
    path: 'componenti',
    component: RouterDispatcherComponent,
    children: [
      { path: '', redirectTo: 'accordion', pathMatch: 'full' },
      { path: 'avatar', loadChildren: () => import('src/app/avatar/avatar.module').then(m => m.AvatarModule) },
      { path: 'badge', loadChildren: () => import('src/app/badge/badge.module').then(m => m.BadgeModule) },
      { path: 'progress-bar', loadChildren: () => import('src/app/progress-bar/progress-bar.module').then(m => m.ProgressBarModule) },
      { path: 'popover', loadChildren: () => import('src/app/popover/popover.module').then(m => m.PopoverModule) },
      { path: 'tabs', loadChildren: () => import('src/app/tabs/tabs.module').then(m => m.TabsModule) },
      { path: 'tooltip', loadChildren: () => import('src/app/tooltip/tooltip.module').then(m => m.TooltipModule) },
      { path: 'button', loadChildren: () => import('src/app/button/button.module').then(m => m.ButtonModule) },
      { path: 'collapse', loadChildren: () => import('src/app/collapse/collapse.module').then(m => m.CollapseModule) },
      { path: 'accordion', loadChildren: () => import('src/app/accordion/accordion.module').then(m => m.AccordionModule) },
      { path: 'dropdown', loadChildren: () => import('src/app/dropdown/dropdown.module').then(m => m.DropdownModule) },
      { path: 'chip', loadChildren: () => import('src/app/chip/chip.module').then(m => m.ChipModule) },
      { path: 'dimmer', loadChildren: () => import('src/app/dimmer/dimmer.module').then(m => m.DimmerModule) },
      { path: 'callout', loadChildren: () => import('src/app/callout/callout.module').then(m => m.CalloutModule) },
      { path: 'steppers', loadChildren: () => import('src/app/steppers/steppers.module').then(m => m.SteppersModule) },
      { path: 'notifications', loadChildren: () => import('src/app/notifications/notifications.module').then(m => m.NotificationsModule) },
      { path: 'rating', loadChildren: () => import('src/app/rating/rating.module').then(m => m.RatingModule) },
      { path: 'pagination', loadChildren: () => import('src/app/pagination/pagination.module').then(m => m.PaginationModule) },
      { path: 'alert', loadChildren: () => import('src/app/alert/alert.module').then(m => m.AlertModule) },
      { path: 'spinner', loadChildren: () => import('src/app/spinner/spinner.module').then(m => m.SpinnerModule) },
      { path: 'icon', loadChildren: () => import('src/app/icon/icon.module').then(m => m.IconModule) },
      { path: 'error-page', loadChildren: () => import('src/app/error-page/error-page.module').then(m => m.ErrorPageModule) },
      { path: 'modal', loadChildren: () => import('src/app/modal/modal.module').then(m => m.ModalModule) },
      {
        path: 'language-switcher',
        loadChildren: () => import('src/app/language-switcher/language-switcher.module').then(m => m.LanguageSwitcherModule),
      },
      { path: 'carousel', loadChildren: () => import('src/app/carousel/carousel.module').then(m => m.CarouselModule) },
      { path: 'card', loadChildren: () => import('src/app/card/card.module').then(m => m.CardModule) },
      { path: 'range', loadChildren: () => import('src/app/range/range.module').then(m => m.RangeModule) },
      { path: 'timeline', loadChildren: () => import('src/app/timeline/timeline.module').then(m => m.TimelineModule) },
      { path: 'video-player', loadChildren: () => import('src/app/video-player/video-player.module').then(m => m.VideoPlayerModule) },
    ],
  },
  { path: 'esempi', component: RouterDispatcherComponent, children: EXAMPLES_ROUTES },
  { path: 'error/not-found', component: ItErrorPageComponent, data: { errorCode: 404 } },
  { path: 'error/forbidden', component: ItErrorPageComponent, data: { errorCode: 403 } },
  { path: 'error/server-error', component: ItErrorPageComponent, data: { errorCode: 500 } },
  { path: '**', redirectTo: 'error/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
