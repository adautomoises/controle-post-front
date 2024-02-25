import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSupplyComponent } from './list-supply/list-supply.component';
import { CreateSupplyComponent } from './create-supply/create-supply.component';
import { SupplyComponent } from './supply.component';

const routes: Routes = [
  { path: '', redirectTo: 'supply', pathMatch: 'full' },
  {
    path: 'supply',
    component: SupplyComponent,
    children: [
      {
        path: '',
        component: ListSupplyComponent,
      },
      {
        path: 'create',
        component: CreateSupplyComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupplyRoutingModule {}
