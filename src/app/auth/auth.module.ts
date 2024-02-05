import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './register/register.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { SetPasswordComponent } from './set-password/set-password.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadInterceptor } from '../_service/load-interceptor';



@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    VerifyOtpComponent,
    ForgetPasswordComponent,
    SetPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule, SharedModule,
    RouterModule, FormsModule, ReactiveFormsModule

  ],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: LoadInterceptor, multi: true }

  ]
})
export class AuthModule { }
