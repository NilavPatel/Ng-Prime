import { NgModule } from '@angular/core';
import { NgPrimeModule } from './app.ngprime.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomMinDirective } from './core/validators/custom-min-validator.directive';
import { CustomMaxDirective } from './core/validators/custom-max-validator.directive';

@NgModule({
    imports: [
    ],
    exports: [
        NgPrimeModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations:[
        CustomMinDirective,
        CustomMaxDirective
    ]
})
export class AppCommonModule {

}