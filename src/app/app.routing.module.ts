import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/gaurds/auth.gaurd';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { DepartmentDetailComponent } from './department/department-detail/department-detail.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent, },
    { path: 'register', component: RegisterUserComponent, },
    {
        path: 'home', component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
            { path: 'employees', component: EmployeesComponent, canActivate: [AuthGuard] },
            {
                path: 'departments', component: DepartmentComponent,
                children: [
                    { path: '', redirectTo: 'department-list', pathMatch: 'full', canActivate: [AuthGuard] },
                    { path: 'department-list', component: DepartmentListComponent, canActivate: [AuthGuard] },
                    { path: 'department-detail', component: DepartmentDetailComponent, canActivate: [AuthGuard] }
                ]
            }
        ]
    },
    {
        path: 'aboutus',
        component: LayoutComponent,
        loadChildren: './aboutus/aboutus.module#AboutUsModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'contactus',
        component: LayoutComponent,
        loadChildren: './contactus/contactus.module#ContactUsModule',
        canActivate: [AuthGuard]
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }