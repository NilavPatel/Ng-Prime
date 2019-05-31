import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterUserComponent } from './register-user.component';
import { RegisterUserRoutingModule } from './register-user.routing';
import { AppCommonModule } from '../app.common.module';

@NgModule({
  imports: [
    CommonModule,
    RegisterUserRoutingModule,
    AppCommonModule
  ],
  declarations: [RegisterUserComponent]
})
export class RegisterUserModule { }