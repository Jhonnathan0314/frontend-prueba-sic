import { Component } from '@angular/core';
import { Employee } from 'src/app/core/models/employee.model';
import { EmployeeService } from 'src/app/core/services/data/employee/employee.service';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.findAllProcesses();
  }

  async findAllProcesses() {
    this.employeeService.findAll().subscribe({
      next: (response) => {
        this.employees = response.data;
      },
      error: (error) => {
        console.log("error consultando las personas");
      },
    })
  }

}
