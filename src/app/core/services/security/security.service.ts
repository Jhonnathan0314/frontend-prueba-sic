import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PersonLogin, PersonRegister } from '../../models/person.model';
import { Observable } from 'rxjs';
import { ApiResponse, AuthResponse } from '../../models/general.model';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  apiUrl: string = '';

  constructor(private http: HttpClient) {
    this.apiUrl = environment.BACKEND_URL;
  }

  register(registerRequest: PersonRegister): Observable<ApiResponse<AuthResponse>> {
    return this.http.post<ApiResponse<AuthResponse>>(`${this.apiUrl}/auth/register`, registerRequest);
  }

  login(loginRequest: PersonLogin): Observable<ApiResponse<AuthResponse>> {
    return this.http.post<ApiResponse<AuthResponse>>(`${this.apiUrl}/auth/login`, loginRequest);
  }

}
