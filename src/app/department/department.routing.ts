import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepartmentComponent } from './department.component';


const routes: Routes = [
    {
        path: '',
        redirectTo:'department-list'
    },
    {
        path: 'department-list',
        component: DepartmentComponent,
        loadChildren: './department-list/department-list.module#DepartmentListModule'
    },
    {
        path: 'department-detail',
        component: DepartmentComponent,
        loadChildren: './department-detail/department-detail.module#DepartmentDetailModule'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DepartmentRoutingModule { }