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
        loadChildren: () => import('./department-list/department-list.module').then(m => m.DepartmentListModule)
    },
    {
        path: 'department-detail',
        component: DepartmentComponent,
        loadChildren: () => import('./department-detail/department-detail.module').then(m => m.DepartmentDetailModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DepartmentRoutingModule { }