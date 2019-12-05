import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CustomMenuItem } from '../models/menu-item.model';

@Injectable({
    providedIn: 'root',
})
/**
 * menu data service
 */
export class MenuDataService {

    public toggleMenuBar: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    getMenuList(): CustomMenuItem[] {
        return [
            {
                Label: 'Home', Icon: 'fa-home', RouterLink: '/main/dashboard', Childs: null, IsChildVisible: false
            },
            {
                Label: 'Employees', Icon: 'fa-users', RouterLink: '/main/employees', Childs: null, IsChildVisible: false
            },
            {
                Label: 'Departments', Icon: 'fa-sitemap', RouterLink: '/main/departments', Childs: null, IsChildVisible: false
            },
            {
                Label: 'AboutUs', Icon: 'fa-info-circle', RouterLink: '/main/aboutus', Childs: null, IsChildVisible: false
            },
            {
                Label: 'ContactUs', Icon: 'fa-envelope', RouterLink: '/main/contactus', Childs: null, IsChildVisible: false
            },
            {
                Label: 'Error 404', Icon: 'fa-exclamation-triangle', RouterLink: '/error', Childs: null, IsChildVisible: false
            },
            {
                Label: 'Menu Level 1', Icon: 'fa-cart-plus', RouterLink: null, Childs: [
                    { Label: 'Menu Level 1.1', RouterLink: null, Childs: null, IsChildVisible: false },
                    {
                        Label: 'Menu Level 1.2', RouterLink: null, IsChildVisible: false, Childs: [
                            { Label: 'Menu Level 1.2.1', RouterLink: null, Childs: null, IsChildVisible: false },
                            { Label: 'Menu Level 1.2.2', RouterLink: null, Childs: null, IsChildVisible: false }
                        ]
                    }
                ], IsChildVisible: false
            }
        ];
    }
}