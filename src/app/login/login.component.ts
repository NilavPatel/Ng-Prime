import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/services/user.service';
import { User } from '../core/models/user.model';
import { AlertService } from '../core/services/alert.service';
import { RouteStateService } from '../core/services/routeState.service';
import { SessionService } from '../core/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;

  password: string;

  constructor(
    private userService: UserService,
    private alertService: AlertService,
    private routeStateService: RouteStateService,
    private sessionService: SessionService
  ) { }

  ngOnInit() {
    this.userName = "";
    this.password = "";
  }

  onClickLogin() {
    let user: User = this.userService.getUserByUserNameAndPassword(this.userName, this.password);
    if (user) {      
      this.sessionService.setSessionValue("currentUser", user);
      this.routeStateService.loadNewRouteState("Home",'/home', null, true);
      return;
    }
    this.alertService.addSingle('error', '', 'Invalid user.');
    return;
  }

}
