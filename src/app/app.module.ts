// angular default
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Prime NG
import { MessageService } from 'primeng/api';
// app related
import { AppComponent } from './app.component';
import { AuthGuard } from './core/gaurds/auth.gaurd';
import { AppRoutingModule } from './app.routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './layout/menu/menu.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoaderService } from './core/services/loader.service';
import { ToastService } from './core/services/toast.service';
import { RouteStateService } from './core/services/route-state.service';
import { SessionService } from './core/services/session.service';
import { UserIdleModule } from 'angular-user-idle';
import { ThemeService } from './core/services/theme.service';
import { ApplicationStateService } from './core/services/application-state.service';
import { UserDataService } from './core/services/user-data.service'
import { MenuDataService } from './core/services/menu-data.service';
import { EmployeeDataService } from './employees/employee-data.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UserContextService } from './core/services/user-context.service';
import { AppCommonModule } from './app.common.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UserIdleModule.forRoot({ idle: 300, timeout: 1, ping: null }),
    HttpClientModule,
    AppCommonModule
  ],
  providers: [
    MessageService,
    AuthGuard,
    LoaderService,
    ToastService,
    RouteStateService,
    SessionService,
    ThemeService,
    ApplicationStateService,
    UserDataService,
    MenuDataService,
    EmployeeDataService,
    UserContextService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
