import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonRegister } from 'src/app/core/models/person.model';
import { PrimeNGObject } from 'src/app/core/models/primeng.model';
import { SecurityService } from 'src/app/core/services/security/security.service';
import { SessionService } from 'src/app/core/services/session/session.service';

import identificationTypesJson from 'src/assets/data/identificationTypes.json';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup;
  registerRequest: PersonRegister = new PersonRegister();

  identificationTypes: PrimeNGObject[] = identificationTypesJson;

  constructor(
    private formBuilder: FormBuilder,
    private securityService: SecurityService,
    private sessionService: SessionService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = this.formBuilder.group({
      identificationNumber: ['', [Validators.required]],
      identificationType: ['CC', [Validators.required]],
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  receiveValue(key: string, value: string) {
    this.registerForm.value[key] = value;
  }

  validateForm() {
    if(!this.registerForm.valid || this.registerForm.value.password != this.registerForm.value.confirmPassword) return;

    this.registerRequest = {
      identificationNumber: this.registerForm.value.identificationNumber,
      identificationType: this.registerForm.value.identificationType,
      name: this.registerForm.value.name,
      lastname: this.registerForm.value.lastname,
      phone: this.registerForm.value.phone,
      address: this.registerForm.value.address,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password
    }
    
    this.register();
  }

  register() {
    this.securityService.register(this.registerRequest).subscribe({
      next: (res) => this.sessionService.saveSession(this.registerForm.value, res.data.token),
      error: (error) => console.log("Error en register: ", error)
    });
  }

}
