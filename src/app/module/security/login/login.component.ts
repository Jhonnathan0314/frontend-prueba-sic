import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SecurityService } from 'src/app/core/services/security/security.service';
import { SessionService } from 'src/app/core/services/session/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private securityService: SecurityService,
    private sessionService: SessionService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = this.formBuilder.group({
      identificationNumber: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  receiveValue(key: string, value: string) {
    this.loginForm.value[key] = value;
  }

  validateForm() {
    if(!this.loginForm.valid) return;

    this.login();
  }

  login() {
    this.securityService.login(this.loginForm.value).subscribe({
      next: (res) => this.sessionService.saveSession(this.loginForm.value, res.data.token),
      error: (error) => console.log("Error en login: ", error)
    });
  }

}
