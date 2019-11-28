import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from 'src/app/app.common.module';
import { HeaderBreadCrumbModule } from 'src/app/shared/layout/header-breadcrumb/header-breadcrumb.module';
import { EmployeesRoutingModule } from 'src/app/features/employees/employees.routing';
import { EmployeesComponent } from 'src/app/features/employees/employees.component';

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