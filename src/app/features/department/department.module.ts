import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from 'src/app//app.common.module';
import { DepartmentRoutingModule } from 'src/app/features/department/department.routing';
import { DepartmentComponent } from 'src/app/features/department/department.component';

@NgModule({
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    AppCommonModule
  ],
  declarations: [
    DepartmentComponent
  ]
})
export class DepartmentModule { }