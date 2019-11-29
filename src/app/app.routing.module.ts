import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'src/app/core/gaurds/auth.gaurd';
import { LayoutComponent } from 'src/app/shared/layout/layout.component';
import { ErrorComponent } from './shared/error/error.component';

const appRoutes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('src/app/features/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'register',
        loadChildren: () => import('src/app/features/register-user/register-user.module').then(m => m.RegisterUserModule)
    },
    {
        path: 'main',
        component: LayoutComponent,
        children: [{
            path: 'dashboard',
            loadChildren: () => import('src/app/features/dashboard/dashboard.module').then(m => m.DashboardModule),
            canActivate: [AuthGuard]
        },
        {
            path: 'departments',
            loadChildren: () => import('src/app/features/department/department.module').then(m => m.DepartmentModule),
            canActivate: [AuthGuard]
        },
        {
            path: 'employees',
            loadChildren: () => import('src/app/features/employees/employees.module').then(m => m.EmployeesModule),
            canActivate: [AuthGuard]
        },
        {
            path: 'aboutus',
            loadChildren: () => import('src/app/features/aboutus/aboutus.module').then(m => m.AboutUsModule),
            canActivate: [AuthGuard]
        },
        {
            path: 'contactus',
            loadChildren: () => import('src/app/features/contactus/contactus.module').then(m => m.ContactUsModule),
            canActivate: [AuthGuard]
        }]
    },
    {
        path: 'error',
        component: ErrorComponent,
        //loadChildren: () => import('src/app/shared/error/error.module').then(m => m.ErrorModule)
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