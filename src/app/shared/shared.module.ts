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
import { YearInputComponent } from './components/year-input/year-input.component';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [
    TextInputComponent,
    PasswordInputComponent,
    ButtonComponent,
    DropdownComponent,
    YearInputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    ConfirmPopupModule,
    DropdownModule,
    CalendarModule
  ],
  exports: [
    TextInputComponent,
    PasswordInputComponent,
    ButtonComponent,
    DropdownComponent,
    YearInputComponent
  ]
})
export class SharedModule { }
