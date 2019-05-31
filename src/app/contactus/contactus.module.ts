import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgPrimeModule } from '../app.ngprime.module';
import { ContactUsRoutingModule } from './contactus.routing';
import { ContactusComponent } from './contactus.component';
import { ContactUsMailDialogComponent } from './contact-us-mail-dialog/contact-us-mail-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    NgPrimeModule
  ],
  declarations: [
    ContactusComponent,
    ContactUsMailDialogComponent],
  entryComponents: [
    ContactUsMailDialogComponent
  ]
})
export class ContactUsModule { }