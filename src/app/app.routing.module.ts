import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/gaurds/auth.gaurd';
import { LayoutComponent } from './layout/layout.component';

const appRoutes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'register',
        loadChildren: () => import('./register-user/register-user.module').then(m => m.RegisterUserModule)
    },
    {
        path: 'dashboard',
        component: LayoutComponent,
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'departments',
        component: LayoutComponent,
        loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'employees',
        component: LayoutComponent,
        loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'aboutus',
        component: LayoutComponent,
        loadChildren: () => import('./aboutus/aboutus.module').then(m => m.AboutUsModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'contactus',
        component: LayoutComponent,
        loadChildren: () => import('./contactus/contactus.module').then(m => m.ContactUsModule),
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