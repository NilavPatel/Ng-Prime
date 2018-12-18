import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../models/user.model';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;

  password: string;

  constructor(private userService: UserService, private router: Router, private notificationService: NotificationService) { }

  ngOnInit() {
    this.userName = "";
    this.password = "";
  }

  onClickLogin() {
    let user: User = this.userService.getUserByUserNameAndPassword(this.userName, this.password);
    if (user) {
      localStorage.setItem('currentUser', user.userId.toString());
      this.router.navigate(['/home']);
      return;
    }
    this.notificationService.addSingle('error', '', 'Invalid user.');
    return;
  }

}
