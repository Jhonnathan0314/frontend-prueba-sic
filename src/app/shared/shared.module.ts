import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './components/text-input/text-input.component';
import { PasswordInputComponent } from './components/password-input/password-input.component';
import { ButtonComponent } from './components/button/button.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';

import { ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    TextInputComponent,
    PasswordInputComponent,
    ButtonComponent,
    DropdownComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    ConfirmPopupModule,
    DropdownModule
  ],
  exports: [
    TextInputComponent,
    PasswordInputComponent,
    ButtonComponent,
    DropdownComponent
  ]
})
export class SharedModule { }
