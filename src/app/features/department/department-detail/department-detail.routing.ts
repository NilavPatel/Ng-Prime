import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentDetailComponent } from 'src/app/features/department/department-detail/department-detail.component';

const routes: Routes = [
    {
        path: '',
        component: DepartmentDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DepartmentDetailRoutingModule { }