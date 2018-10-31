import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  name: string;

  emailId: string;

  password: string;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onClickRegisterUser() {
    let isRegistered: boolean = this.userService.addUser(this.name, this.password, this.emailId);
    if (isRegistered) {
      this.router.navigate(['/home']);
    }
  }

  onClickClear() {
    this.name = "";
    this.emailId = "";
    this.password = "";
  }

}
