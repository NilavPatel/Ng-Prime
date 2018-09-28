import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;

  password: string;

  constructor(private loginService: LoginService, private router: Router, private messageService: MessageService) { }

  ngOnInit() {
    this.userName = "";
    this.password = "";
  }

  onClickLogin() {
    var isValidUser = this.loginService.validateUser(this.userName, this.password);
    if (isValidUser) {
      this.router.navigate(['/home']);
      return;
    }
    this.messageService.add({ severity: 'error', summary: '', detail: 'Invalid user.' });
    return;
  }

}
