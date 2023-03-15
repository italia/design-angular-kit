import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouterDispatcherComponent } from './router-dispatcher/router-dispatcher.component';
import {
  ErrorPageComponent
} from '../../projects/design-angular-kit/src/lib/components/utils/error-page/error-page.component';


const routes: Routes = [
  { path: '', redirectTo: 'info', pathMatch: 'full' },
  { path: 'info', component: RouterDispatcherComponent, children: [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'welcome', loadChildren: () => import('src/app/welcome/welcome.module').then(m => m.WelcomeModule) }
  ]},
  { path: 'componenti', component: RouterDispatcherComponent, children: [
    { path: '', redirectTo: 'badge', pathMatch: 'full' },
    { path: 'badge', loadChildren: () => import('src/app/badge/badge.module').then(m => m.BadgeModule) },
    { path: 'checkbox', loadChildren: () => import('src/app/checkbox/checkbox.module').then(m => m.CheckboxModule) },
    { path: 'progress-bar', loadChildren: () => import('src/app/progress-bar/progress-bar.module').then(m => m.ProgressBarModule) },
    { path: 'toggle', loadChildren: () => import('src/app/toggle/toggle.module').then(m => m.ToggleModule) },
    { path: 'popover', loadChildren: () => import('src/app/popover/popover.module').then(m => m.PopoverModule) },
    { path: 'radio', loadChildren: () => import('src/app/radio/radio.module').then(m => m.RadioModule) },
    { path: 'breadcrumb', loadChildren: () => import('src/app/breadcrumb/breadcrumb.module').then(m => m.BreadcrumbModule) },
    { path: 'tabs', loadChildren: () => import('src/app/tabs/tabs.module').then(m => m.TabsModule) },
    { path: 'tooltip', loadChildren: () => import('src/app/tooltip/tooltip.module').then(m => m.TooltipModule) },
    { path: 'button', loadChildren: () => import('src/app/button/button.module').then(m => m.ButtonModule) },
    { path: 'collapse', loadChildren: () => import('src/app/collapse/collapse.module').then(m => m.CollapseModule) },
    { path: 'form-input', loadChildren: () => import('src/app/form-input/form-input.module').then(m => m.FormInputModule) },
    { path: 'dropdown', loadChildren: () => import('src/app/dropdown/dropdown.module').then(m => m.DropdownModule) },
    { path: 'back-button', loadChildren: () => import('src/app/back-button/back-button.module').then(m => m.BackButtonModule) },
    { path: 'chip', loadChildren: () => import('src/app/chip/chip.module').then(m => m.ChipModule) },
    { path: 'forward', loadChildren: () => import('src/app/forward/forward.module').then(m => m.ForwardModule) },
    { path: 'dimmer', loadChildren: () => import('src/app/dimmer/dimmer.module').then(m => m.DimmerModule) },
    { path: 'callout', loadChildren: () => import('src/app/callout/callout.module').then(m => m.CalloutModule) },
    { path: 'upload', loadChildren: () => import('src/app/upload/upload.module').then(m => m.UploadModule) },
    { path: 'steppers', loadChildren: () => import('src/app/steppers/steppers.module').then(m => m.SteppersModule) },
    { path: 'select', loadChildren: () => import('src/app/select/select.module').then(m => m.SelectModule) },
    { path: 'notifications', loadChildren: () => import('src/app/notifications/notifications.module').then(m => m.NotificationsModule) },
    { path: 'rating', loadChildren: () => import('src/app/rating/rating.module').then(m => m.RatingModule) },
    { path: 'pagination', loadChildren: () => import('src/app/pagination/pagination.module').then(m => m.PaginationModule) },
    { path: 'table', loadChildren: () => import('src/app/table/table.module').then(m => m.TableModule) },
    { path: 'textarea', loadChildren: () => import('src/app/textarea/textarea.module').then(m => m.TextareaModule) },
    { path: 'alert', loadChildren: () => import('src/app/alert/alert.module').then(m => m.AlertModule) },
    { path: 'spinner', loadChildren: () => import('src/app/spinner/spinner.module').then(m => m.SpinnerModule) },
    { path: 'icon', loadChildren: () => import('src/app/icon/icon.module').then(m => m.IconModule) },
    { path: 'error-page', loadChildren: () => import('src/app/error-page/error-page.module').then(m => m.ErrorPageModule) },
  ]},
  { path: 'error/not-found', component: ErrorPageComponent, data: { errorCode: 404 } },
  { path: 'error/forbidden', component: ErrorPageComponent, data: { errorCode: 403 } },
  { path: 'error/server-error', component: ErrorPageComponent, data: { errorCode: 500 } },
  { path: '**', redirectTo: 'error/not-found'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
