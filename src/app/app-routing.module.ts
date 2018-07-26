import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouterDispatcherComponent } from './router-dispatcher/router-dispatcher.component';

const routes: Routes = [
  { path: '', redirectTo: 'info', pathMatch: 'full' },
  { path: 'info', component: RouterDispatcherComponent, children: [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'welcome', loadChildren: 'src/app/welcome/welcome.module#WelcomeModule' },
    { path: 'getting-started', loadChildren: 'src/app/getting-started/getting-started.module#GettingStartedModule' }
  ]},
  { path: 'componenti', component: RouterDispatcherComponent, children: [
    { path: '', redirectTo: 'checkbox', pathMatch: 'full' },
    { path: 'checkbox', loadChildren: 'src/app/checkbox/checkbox.module#CheckboxModule' },
    { path: 'toggle', loadChildren: 'src/app/toggle/toggle.module#ToggleModule' },
    { path: 'radio', loadChildren: 'src/app/radio/radio.module#RadioModule' },
    { path: 'button', loadChildren: 'src/app/button/button.module#ButtonModule' }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
