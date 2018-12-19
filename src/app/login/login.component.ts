import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { NotificationService } from '../services/notification.service';
import { RouteStateService } from '../services/routeState.service';
import { SessionService } from '../services/session.service';

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
    private notificationService: NotificationService,
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
      this.routeStateService.loadNewRouteState('/home', null, true);
      return;
    }
    this.notificationService.addSingle('error', '', 'Invalid user.');
    return;
  }

}
