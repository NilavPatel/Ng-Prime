import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/gaurds/auth.gaurd';
import { LayoutComponent } from './layout/layout.component';

const appRoutes: Routes = [
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
    },
    {
        path: 'register',
        loadChildren: './register-user/register-user.module#RegisterUserModule'
    },
    {
        path: 'dashboard',
        component: LayoutComponent,
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'departments',
        component: LayoutComponent,
        loadChildren: './department/department.module#DepartmentModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'employees',
        component: LayoutComponent,
        loadChildren: './employees/employees.module#EmployeesModule',
        canActivate: [AuthGuard]
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
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }