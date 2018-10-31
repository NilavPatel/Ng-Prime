// angular default
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
// Prime NG
import { MessageService } from 'primeng/api';
import { NgPrimeModule } from './app.ngprime.module'
// app related
import { AppComponent } from './app.component';
import { AuthGuard } from './app.authguard';
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
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    NgPrimeModule
  ],
  providers: [MessageService, AuthGuard],
  bootstrap: [AppComponent],
  exports: [DepartmentComponent, DepartmentListComponent, DepartmentDetailComponent, RegisterUserComponent]
})
export class AppModule { }
