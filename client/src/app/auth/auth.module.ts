import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { UtilsModule } from '../utils/utils.module';
import { AuthService } from './service/auth.service';
@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    AuthRoutingModule,
    UtilsModule
  ],
  providers: [ AuthService ]
})
export class AuthModule { }
