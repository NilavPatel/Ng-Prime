import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ThemeService {
    public theme: BehaviorSubject<string> = new BehaviorSubject<string>("dark-theme");

    selectTheme(value: string) {
        this.theme.next(value);
    }
}