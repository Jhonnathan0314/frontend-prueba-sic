import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessRoutingModule } from './process-routing.module';

import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateProcessComponent } from './update-process/update-process.component';
import { CreateProcessComponent } from './create-process/create-process.component';
import { ViewProcessesComponent } from './view-processes/view-processes.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ViewProcessesComponent,
    CreateProcessComponent,
    UpdateProcessComponent
  ],
  imports: [
    CommonModule,
    ProcessRoutingModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ]
})
export class ProcessModule { }
