import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/gaurds/auth.gaurd';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { DepartmentDetailComponent } from './department/department-detail/department-detail.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent, },
    { path: 'register', component: RegisterUserComponent, },
    {
        path: 'home', component: HomeComponent, canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
            { path: 'employees', component: EmployeesComponent, canActivate: [AuthGuard] },
            {
                path: 'departments', component: DepartmentComponent, canActivate: [AuthGuard],
                children: [{ path: '', redirectTo: 'department-list', pathMatch: 'full' },
                { path: 'department-list', component: DepartmentListComponent, canActivate: [AuthGuard] },
                { path: 'department-detail', component: DepartmentDetailComponent, canActivate: [AuthGuard] }]
            },
            { path: 'aboutus', component: AboutusComponent, canActivate: [AuthGuard] },
            { path: 'contactus', component: ContactusComponent, canActivate: [AuthGuard] }
        ]
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }