import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { AppMaterialModule } from '../app-material/app-material.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    AuthRoutingModule,
    AppMaterialModule
  ]
})
export class AuthModule { }
