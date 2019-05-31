import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsRoutingModule } from './contactus.routing';
import { ContactusComponent } from './contactus.component';
import { ContactUsMailDialogComponent } from './contact-us-mail-dialog/contact-us-mail-dialog.component';
import { AppCommonModule } from '../app.common.module';

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