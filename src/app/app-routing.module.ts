import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouterDispatcherComponent } from './router-dispatcher/router-dispatcher.component';

const routes: Routes = [
  { path: '', redirectTo: 'info', pathMatch: 'full' },
  { path: 'info', component: RouterDispatcherComponent, children: [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'welcome', loadChildren: 'src/app/welcome/welcome.module#WelcomeModule' }
  ]},
  { path: 'componenti', component: RouterDispatcherComponent, children: [
    { path: '', redirectTo: 'checkbox', pathMatch: 'full' },
    { path: 'checkbox', loadChildren: 'src/app/checkbox/checkbox.module#CheckboxModule' },
    { path: 'progress-bar', loadChildren: 'src/app/progress-bar/progress-bar.module#ProgressBarModule' },
    { path: 'toggle', loadChildren: 'src/app/toggle/toggle.module#ToggleModule' },
    { path: 'radio', loadChildren: 'src/app/radio/radio.module#RadioModule' },
    { path: 'tooltip', loadChildren: 'src/app/tooltip/tooltip.module#TooltipModule' },
    { path: 'button', loadChildren: 'src/app/button/button.module#ButtonModule' },
    { path: 'badge', loadChildren: 'src/app/badge/badge.module#BadgeModule' },
    { path: 'form-input', loadChildren: 'src/app/form-input/form-input.module#FormInputModule' }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
