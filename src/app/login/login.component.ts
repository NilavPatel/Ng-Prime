import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/services/user.service';
import { User } from '../core/models/user.model';
import { ToastService } from '../core/services/toast.service';
import { RouteStateService } from '../core/services/route-state.service';
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
    private toastService: ToastService,
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
      this.sessionService.setItem("currentUser", user);
      this.routeStateService.add("Home",'/home', null, true);
      return;
    }
    this.toastService.addSingle('error', '', 'Invalid user.');
    return;
  }

}
