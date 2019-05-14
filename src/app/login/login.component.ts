import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../core/services/user-data.service';
import { User } from '../core/models/user.model';
import { ToastService } from '../core/services/toast.service';
import { RouteStateService } from '../core/services/route-state.service';
import { SessionService } from '../core/services/session.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;

  password: string;

  locale: string;

  constructor(
    private userService: UserDataService,
    private toastService: ToastService,
    private routeStateService: RouteStateService,
    private sessionService: SessionService,
    public translate: TranslateService
  ) { }

  ngOnInit() {
    this.userName = "";
    this.password = "";    
    this.locale = this.sessionService.getItem("ng-prime-language");
  }

  onClickLogin() {
    let user: User = this.userService.getUserByUserNameAndPassword(this.userName, this.password);
    if (user) {
      this.sessionService.setItem("currentUser", user);
      this.routeStateService.add("Home", '/home', null, true);
      return;
    }
    this.toastService.addSingle('error', '', 'Invalid user.');
    return;
  }

  onLanguageChange($event) {
    this.locale = $event.target.value;
    if (this.locale == undefined || this.locale == null || this.locale.length == 0) {
      this.locale = "en";
    }
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use(this.locale);
    this.sessionService.setItem("ng-prime-language", this.locale);
  }

}
