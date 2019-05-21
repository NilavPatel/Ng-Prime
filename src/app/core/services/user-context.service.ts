import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { SessionService } from './session.service';

const defaultUser = null;

@Injectable()
export class UserContextService {
    public user$ = new BehaviorSubject(defaultUser);

    constructor(private sessionService: SessionService) {        
        var data = this.sessionService.getItem("currentUser");
        if (data != null && data.length > 0) {
            this.user$.next(JSON.parse(data));
        }
    }

    public setUser(user: any) {
        this.sessionService.setItem("currentUser", JSON.stringify(user));
        this.user$.next(user);
    }

    public logout() {
        this.sessionService.removeItem("currentUser");
        this.user$.next(defaultUser);
    }

}