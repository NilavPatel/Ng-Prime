import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { NotificationService } from '../services/notification.service';
import { RouteState } from '../models/routeState.model';
import { RouteStateService } from '../services/routeState.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;

  password: string;

  constructor(private userService: UserService, private notificationService: NotificationService, private routeStateService: RouteStateService) { }

  ngOnInit() {
    this.userName = "";
    this.password = "";
  }

  onClickLogin() {
    let user: User = this.userService.getUserByUserNameAndPassword(this.userName, this.password);
    if (user) {
      localStorage.setItem('currentUser', user.userId.toString());
      debugger;
      var routeState = new RouteState();
      routeState.viewName = '/home';
      this.routeStateService.pushParentRouteState(routeState);
      return;
    }
    this.notificationService.addSingle('error', '', 'Invalid user.');
    return;
  }

}
