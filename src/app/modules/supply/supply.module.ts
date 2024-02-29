import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SupplyRoutingModule } from './supply-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ListSupplyComponent } from './list-supply/list-supply.component';
import { CreateSupplyComponent } from './create-supply/create-supply.component';
import { ManagementComponent } from '../management/management.component';
// PRIMENG
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { ChartModule } from 'primeng/chart';
import { PaginatorModule } from 'primeng/paginator';
import { SupplyComponent } from './supply.component';
import { DividerModule } from 'primeng/divider';
import { TooltipModule } from 'primeng/tooltip';
import { PasswordModule } from 'primeng/password';

@NgModule({
  declarations: [
    SupplyComponent,
    ListSupplyComponent,
    CreateSupplyComponent,
    ManagementComponent,
  ],
  imports: [
    CommonModule,
    SupplyRoutingModule,
    TableModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    InputNumberModule,
    CalendarModule,
    DropdownModule,
    ChartModule,
    PaginatorModule,
    DividerModule,
    TooltipModule,
    PasswordModule,
  ],
  providers: [],
  bootstrap: [],
})
export class SupplyModule {}
