import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsRoutingModule } from 'src/app/features/contactus/contactus.routing';
import { ContactusComponent } from 'src/app/features/contactus/contactus.component';
import { ContactUsMailDialogComponent } from 'src/app/features/contactus/contact-us-mail-dialog/contact-us-mail-dialog.component';
import { AppCommonModule } from 'src/app/app.common.module';

@NgModule({
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    AppCommonModule
  ],
  declarations: [
    ContactusComponent,
    ContactUsMailDialogComponent
  ],
  entryComponents: [
    ContactUsMailDialogComponent
  ]
})
export class ContactUsModule { }