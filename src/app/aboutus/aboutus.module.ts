import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsRoutingModule } from './aboutus.routing';
import { AboutusComponent } from './aboutus.component';
import { NgPrimeModule } from '../app.ngprime.module';

@NgModule({
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    NgPrimeModule
  ],
  declarations: [AboutusComponent]
})
export class AboutUsModule { }