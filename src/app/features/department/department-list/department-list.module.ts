import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentListRoutingModule } from 'src/app/features/department/department-list/department-list.routing';
import { DepartmentListComponent } from 'src/app/features/department/department-list/department-list.component';
import { AppCommonModule } from 'src/app/app.common.module';
import { HeaderBreadCrumbModule } from 'src/app/shared/layout/header-breadcrumb/header-breadcrumb.module';

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