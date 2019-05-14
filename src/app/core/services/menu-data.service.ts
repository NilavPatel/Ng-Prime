import { Injectable } from '@angular/core';

@Injectable()
/**
 * menu data service
 */
export class MenuDataService {
    getMenuList() {
        return [
            {
                Label: 'Home', Icon: 'fa-home', RouterLink: '/home/dashboard', Childs: null, IsChildVisible: false
            },
            {
                Label: 'Employees', Icon: 'fa-users', RouterLink: '/home/employees', Childs: null, IsChildVisible: false
            },
            {
                Label: 'Departments', Icon: 'fa-sitemap', RouterLink: '/home/departments', Childs: null, IsChildVisible: false
            },
            {
                Label: 'AboutUs', Icon: 'fa-info-circle', RouterLink: '/home/aboutus', Childs: null, IsChildVisible: false
            },
            {
                Label: 'ContactUs', Icon: 'fa-envelope', RouterLink: '/home/contactus', Childs: null, IsChildVisible: false
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