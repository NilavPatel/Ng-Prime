import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from 'src/app/features/department/department-list/department-list.component';

const routes: Routes = [
    {
        path: '',
        component: DepartmentListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DepartmentListRoutingModule { }