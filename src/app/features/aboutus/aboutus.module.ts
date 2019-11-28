import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsRoutingModule } from 'src/app/features/aboutus/aboutus.routing';
import { AboutusComponent } from 'src/app/features/aboutus/aboutus.component';
import { AppCommonModule } from 'src/app//app.common.module';

@NgModule({
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    AppCommonModule
  ],
  declarations: [AboutusComponent]
})
export class AboutUsModule { }