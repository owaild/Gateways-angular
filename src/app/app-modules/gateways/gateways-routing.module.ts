import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GatewaysListComponent } from './gateways-list/gateways-list.component';
import { GatewaysComponent } from './gateways.component';

const routes: Routes = [
  {
    path: '',
    component: GatewaysComponent,
    children: [
      {
        path: 'list',
        component: GatewaysListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GatewaysRoutingModule { }
