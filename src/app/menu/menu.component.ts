import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'Home', icon: 'fa fa-home', routerLink: ['/home/dashboard']
            },
            {
                label: 'Employees', icon: 'fa fa-users', routerLink: ['/home/employees']
            },
            {
                label: 'Departments', icon: 'fa fa-sitemap', routerLink: ['/home/departments']
            },
            {
                label: 'About Us', icon: 'fa fa-info-circle', routerLink: ['/home/aboutus']
            },
            {
                label: 'Contact Us', icon: 'fa fa-envelope', routerLink: ['/home/contactus']
            }
        ];
    }
}
