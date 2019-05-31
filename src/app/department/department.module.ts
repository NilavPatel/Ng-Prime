import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../app.common.module';
import { DepartmentRoutingModule } from './department.routing';
import { DepartmentComponent } from './department.component';

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