import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewProcessesComponent } from './view-processes/view-processes.component';
import { CreateProcessComponent } from './create-process/create-process.component';
import { UpdateProcessComponent } from './update-process/update-process.component';

const routes: Routes = [
  { path: 'all', component: ViewProcessesComponent },
  { path: 'create', component: CreateProcessComponent },
  { path: 'update/:id', component: UpdateProcessComponent },
  { path: '**', redirectTo: 'all', pathMatch: 'full' },
  { path: '', redirectTo: 'all', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessRoutingModule { }
