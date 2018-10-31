import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root',
})
export class UserService {

    users: User[] = [];

    constructor() {
        let user = {
            userId: 1, userName: "admin", password: "admin", emailId: "admin@prime.com"
        };
        this.users.push(user);
    }

    getUserByUserNameAndPassword(userName: string, password: string): User {
        let user: User = null;
        this.users.forEach(element => {
            if (element.userName === userName && element.password === password) {
                user = element;
            }
        });
        return user;
    }

    addUser(userName: string, password: string, emailId: string): boolean {
        let userId = this.users.length + 1;
        let user = new User();
        user.userId = userId;
        user.userName = userName;
        user.password = password;
        user.emailId = emailId;
        this.users.push(user);
        return true;
    }
}