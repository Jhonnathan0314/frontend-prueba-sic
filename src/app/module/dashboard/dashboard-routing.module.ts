import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: 
    [
      { path: 'process', loadChildren: () => import('./pages/process/process.module').then(m => m.ProcessModule) },
    ] 
  },
  { path: '**', redirectTo: 'process', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
