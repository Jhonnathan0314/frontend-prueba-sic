import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ViewPeopleComponent } from './pages/people/view-people/view-people.component';
import { ViewEmployeesComponent } from './pages/employees/view-employees/view-employees.component';
import { ConsumeComponent } from './pages/consume/consume/consume.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: 
    [
      { path: 'process', loadChildren: () => import('./pages/process/process.module').then(m => m.ProcessModule) },
      { path: 'person/all', component: ViewPeopleComponent },
      { path: 'employee/all', component: ViewEmployeesComponent },
      { path: 'consume', component: ConsumeComponent },
    ] 
  },
  { path: '**', redirectTo: 'process', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
