import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../app.common.module';
import { EmployeesComponent } from './employees.component';
import { EmployeesRoutingModule } from './employees.routing';
import { HeaderBreadCrumbModule } from '../layout/header-breadcrumb/header-breadcrumb.module';

@NgModule({
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    AppCommonModule,
    HeaderBreadCrumbModule
  ],
  declarations: [
    EmployeesComponent
  ]
})
export class EmployeesModule { }