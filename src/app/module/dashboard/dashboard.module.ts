import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MenubarModule } from 'primeng/menubar';
import { RouterModule } from '@angular/router';
import { ViewPeopleComponent } from './pages/people/view-people/view-people.component';
import { ViewEmployeesComponent } from './pages/employees/view-employees/view-employees.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    LayoutComponent,
    ViewPeopleComponent,
    ViewEmployeesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MenubarModule,
    RouterModule,
    TableModule
  ]
})
export class DashboardModule { }
