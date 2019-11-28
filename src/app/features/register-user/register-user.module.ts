import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterUserComponent } from 'src/app/features/register-user/register-user.component';
import { RegisterUserRoutingModule } from 'src/app/features/register-user/register-user.routing';
import { AppCommonModule } from 'src/app/app.common.module';

@NgModule({
  imports: [
    CommonModule,
    RegisterUserRoutingModule,
    AppCommonModule
  ],
  declarations: [RegisterUserComponent]
})
export class RegisterUserModule { }