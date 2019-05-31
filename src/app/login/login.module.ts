import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing';
import { AppCommonModule } from '../app.common.module';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    AppCommonModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }