import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/core/models/general.model';
import { Process, ProcessCreate } from 'src/app/core/models/process.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {

  apiUrl: string = '';

  constructor(private http: HttpClient) {
    this.apiUrl = environment.BACKEND_URL + '/api/v1';
  }

  findAll(): Observable<ApiResponse<Process[]>> {
    return this.http.get<ApiResponse<Process[]>>(`${this.apiUrl}/process`);
  }

  findById(id: number): Observable<ApiResponse<Process>> {
    return this.http.get<ApiResponse<Process>>(`${this.apiUrl}/process/${id}`);
  }

  create(personId: number, employeeId: number, process: ProcessCreate): Observable<ApiResponse<Process>> {
    return this.http.post<ApiResponse<Process>>(`${this.apiUrl}/process/person/${personId}/employee/${employeeId}`, process);
  }

  update(processId: number, personId: number, employeeId: number, process: ProcessCreate): Observable<ApiResponse<Process>> {
    return this.http.put<ApiResponse<Process>>(`${this.apiUrl}/process/${processId}/person/${personId}/employee/${employeeId}`, process);
  }

  deleteById(id: number): Observable<ApiResponse<Process>> {
    return this.http.delete<ApiResponse<Process>>(`${this.apiUrl}/process/${id}`);
  }

}
