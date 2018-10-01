import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MessageService } from 'primeng/api';
import { NgPrimeModule } from './app.ngprime.module'

import { AppComponent } from './app.component';
import { AuthGuard } from './app.authguard';
import { AppRoutingModule } from './app.routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    NgPrimeModule
  ],
  providers: [MessageService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
