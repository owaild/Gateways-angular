import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'gateways',
    loadChildren: () =>
      import('./app-modules/gateways/gateways.module').then((m) => m.GatewaysModule),
  }, {
    path: '',
    redirectTo: 'gateways/list',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
