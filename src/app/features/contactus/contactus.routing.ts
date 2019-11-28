import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactusComponent } from 'src/app/features/contactus/contactus.component';

const routes: Routes = [
    {
        path: '',
        component: ContactusComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContactUsRoutingModule { }