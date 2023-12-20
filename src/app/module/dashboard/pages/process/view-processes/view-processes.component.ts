import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Process } from 'src/app/core/models/process.model';
import { ProcessService } from 'src/app/core/services/data/process/process.service';

@Component({
  selector: 'app-view-processes',
  templateUrl: './view-processes.component.html',
  styleUrls: ['./view-processes.component.css']
})
export class ViewProcessesComponent implements OnInit {

  processes: Process[] = [];

  constructor(private processService: ProcessService) { }

  ngOnInit(): void {
    this.findAllProcesses();
  }

  async findAllProcesses() {
    this.processService.findAll().subscribe({
      next: (response) => {
        this.processes = response.data;
      },
      error: (error) => {
        console.log("error consultando los tramites");
      },
    })
  }

  deleteById(id: number) {
    this.processService.deleteById(id).subscribe({
      next: (response) => {
        this.ngOnInit();
      },
      error: (error) => {
        console.log("error", error);
      }
    })
  }

}