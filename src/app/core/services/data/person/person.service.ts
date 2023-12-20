import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/core/models/general.model';
import { Person } from 'src/app/core/models/person.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  apiUrl: string = '';

  constructor(private http: HttpClient) {
    this.apiUrl = environment.BACKEND_URL + '/api/v1';
  }

  findAll(): Observable<ApiResponse<Person[]>> {
    return this.http.get<ApiResponse<Person[]>>(`${this.apiUrl}/person`);
  }

}
