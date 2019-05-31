import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutusComponent } from './aboutus.component';


const routes: Routes = [
    {
        path: '',
        component: AboutusComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AboutUsRoutingModule { }