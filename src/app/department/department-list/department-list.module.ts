import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentListRoutingModule } from './department-list.routing';
import { DepartmentListComponent } from './department-list.component';
import { AppCommonModule } from '../../app.common.module';
import { HeaderBreadCrumbModule } from '../../layout/header-breadcrumb/header-breadcrumb.module';

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