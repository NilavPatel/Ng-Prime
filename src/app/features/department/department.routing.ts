import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from 'src/app/features/department/department.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'department-list'
    },
    {
        path: 'department-list',
        component: DepartmentComponent,
        loadChildren: () => import('src/app/features/department/department-list/department-list.module').then(m => m.DepartmentListModule)
    },
    {
        path: 'department-detail',
        component: DepartmentComponent,
        loadChildren: () => import('src/app/features/department/department-detail/department-detail.module').then(m => m.DepartmentDetailModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DepartmentRoutingModule { }