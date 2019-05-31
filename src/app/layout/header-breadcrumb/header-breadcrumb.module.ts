import { NgModule } from '@angular/core';
import { HeaderBreadcrumbComponent } from './header-breadcrumb.component';
import { AppCommonModule } from 'src/app/app.common.module';

@NgModule({
  imports: [
    AppCommonModule
  ],
  declarations: [
    HeaderBreadcrumbComponent,
  ],
  exports: [
    HeaderBreadcrumbComponent
  ]
})
export class HeaderBreadCrumbModule { }