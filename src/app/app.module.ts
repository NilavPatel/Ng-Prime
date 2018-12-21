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
import { AuthGuard } from './gaurds/auth.gaurd';
import { AppRoutingModule } from './app.routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { DepartmentDetailComponent } from './department/department-detail/department-detail.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LoaderService } from './services/loader.service';
import { NotificationService } from './services/notification.service';
import { RouteStateService } from './services/routeState.service';
import { SessionService } from './services/session.service';
import { HeaderBreadcrumbComponent } from './header-breadcrumb/header-breadcrumb.component';
import { ContactUsMailDialogComponent } from './contact-us-mail-dialog/contact-us-mail-dialog.component';
import { UserIdleModule } from 'angular-user-idle';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
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
    UserIdleModule.forRoot({idle: 300, timeout: 1, ping: null})
  ],
  providers: [
    MessageService,
    AuthGuard,
    LoaderService,
    NotificationService,
    RouteStateService,
    SessionService
  ],
  bootstrap: [
    AppComponent
  ],
  exports: [
    DepartmentComponent,
    DepartmentListComponent,
    DepartmentDetailComponent,
    RegisterUserComponent
  ],
  entryComponents: [
    ContactUsMailDialogComponent
  ]
})
export class AppModule { }
