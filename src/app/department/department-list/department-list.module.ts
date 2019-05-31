import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from 'src/app/app.common.module';
import { DepartmentListRoutingModule } from './department-list.routing';
import { DepartmentListComponent } from './department-list.component';
import { HeaderBreadCrumbModule } from 'src/app/layout/header-breadcrumb/header-breadcrumb.module';

@NgModule({
  imports: [
    CommonModule,
    DepartmentListRoutingModule,
    AppCommonModule,
    HeaderBreadCrumbModule
  ],
  declarations: [
    DepartmentListComponent
  ]
})
export class DepartmentListModule { }