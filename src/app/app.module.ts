// angular default
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Prime NG
import { MessageService } from 'primeng/api';
import { NgPrimeModule } from './app.ngprime.module'
// app related
import { AppComponent } from './app.component';
import { AuthGuard } from './core/gaurds/auth.gaurd';
import { AppRoutingModule } from './app.routing.module';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './layout/menu/menu.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { DepartmentDetailComponent } from './department/department-detail/department-detail.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LoaderService } from './core/services/loader.service';
import { ToastService } from './core/services/toast.service';
import { RouteStateService } from './core/services/route-state.service';
import { SessionService } from './core/services/session.service';
import { HeaderBreadcrumbComponent } from './layout/header-breadcrumb/header-breadcrumb.component';
import { ContactUsMailDialogComponent } from './contactus/contact-us-mail-dialog/contact-us-mail-dialog.component';
import { UserIdleModule } from 'angular-user-idle';
import { ThemeService } from './core/services/theme.service';
import { ApplicationStateService } from './core/services/application-state.service';
import { UserDataService } from './core/services/user-data.service'
import { MenuDataService } from './core/services/menu-data.service';
import { EmployeeDataService } from './employees/employee-data.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UserContextService } from './core/services/user-context.service';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    EmployeesComponent,
    AboutusComponent,
    ContactusComponent,
    DepartmentComponent,
    DepartmentListComponent,
    DepartmentDetailComponent,
    RegisterUserComponent,
    HeaderBreadcrumbComponent,
    ContactUsMailDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgPrimeModule,
    UserIdleModule.forRoot({ idle: 300, timeout: 1, ping: null }),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    MessageService,
    AuthGuard,
    LoaderService,
    ToastService,
    RouteStateService,
    SessionService,
    ThemeService,
    ApplicationStateService,
    UserDataService,
    MenuDataService,
    EmployeeDataService,
    UserContextService
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    ContactUsMailDialogComponent
  ]
})
export class AppModule { }
