import { NgModule } from '@angular/core';
import { NgPrimeModule } from './app.ngprime.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
    ],
    exports: [
        NgPrimeModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class AppCommonModule {

}