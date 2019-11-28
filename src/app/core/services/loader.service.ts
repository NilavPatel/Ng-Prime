import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
/**
 * loader service
 * toggle loader gif in website
 */
export class LoaderService {
    public status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    show() {
        this.status.next(true);
    }

    hide() {
        this.status.next(false);
    }
}