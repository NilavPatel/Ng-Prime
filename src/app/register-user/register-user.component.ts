import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  userform: FormGroup;

  name: string;

  emailId: string;

  password: string;

  constructor(private userService: UserService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.userform = this.fb.group({
      'name': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      'emailId': new FormControl('', [Validators.required, Validators.email])
    });
  }

  onClickRegisterUser() {
    let isRegistered: boolean = this.userService.addUser(this.userform.controls["name"].value, this.userform.controls["password"].value, this.userform.controls["emailId"].value);
    if (isRegistered) {
      this.router.navigate(['/login']);
    }
  }

  onClickGoToLogin() {
    this.router.navigate(['/login']);
  }

}
