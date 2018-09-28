import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LoginService {

    constructor() { }

    validateUser(userName: string, password: string): boolean {
        if (userName === "admin" && password === "admin") {
            return true;
        }
        return false;
    }
}