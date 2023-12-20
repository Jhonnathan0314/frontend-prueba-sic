import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/core/models/employee.model';
import { ApiResponse } from 'src/app/core/models/general.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiUrl: string = '';

  constructor(private http: HttpClient) {
    this.apiUrl = environment.BACKEND_URL + '/api/v1';
  }

  findAll(): Observable<ApiResponse<Employee[]>> {
    return this.http.get<ApiResponse<Employee[]>>(`${this.apiUrl}/employee`);
  }

}
