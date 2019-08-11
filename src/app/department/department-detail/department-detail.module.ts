import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentDetailRoutingModule } from './department-detail.routing';
import { DepartmentDetailComponent } from './department-detail.component';
import { AppCommonModule } from '../../app.common.module';
import { HeaderBreadCrumbModule } from '../../layout/header-breadcrumb/header-breadcrumb.module';

@NgModule({
  imports: [
    CommonModule,
    DepartmentDetailRoutingModule,
    AppCommonModule,
    HeaderBreadCrumbModule
  ],
  declarations: [
    DepartmentDetailComponent
  ]
})
export class DepartmentDetailModule { }