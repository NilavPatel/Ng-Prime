import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {
    setSessionValue(name: string, value: any) {
        sessionStorage.setItem(name, JSON.stringify(value));
    }

    getSessionValue(name: string): any {
        var value = sessionStorage.getItem(name);
        return JSON.parse(value);
    }

    removeSessionValue(name: string) {
        sessionStorage.removeItem(name);
    }

}