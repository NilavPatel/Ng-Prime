import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './app.authguard';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent, },
    {
        path: 'home', component: HomeComponent, canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
            { path: 'employees', component: EmployeesComponent, canActivate: [AuthGuard] },
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