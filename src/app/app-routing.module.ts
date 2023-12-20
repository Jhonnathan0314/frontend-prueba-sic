import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityGuard } from './core/guards/security/security.guard';
import { DashboardGuard } from './core/guards/dashboard/dashboard.guard';

const routes: Routes = [
  { path: 'security', loadChildren: () => import('./module/security/security.module').then(m => m.SecurityModule), canActivate: [SecurityGuard] },
  { path: 'dashboard', loadChildren: () => import('./module/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [DashboardGuard] },
  { path: '', redirectTo: 'security/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'security/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
