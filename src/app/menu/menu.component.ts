import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouteStateService } from '../core/services/routeState.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    items: MenuItem[];

    constructor(private routeStateService: RouteStateService) { }

    ngOnInit() {
        this.items = [
            {
                label: 'Home', icon: 'fa fa-home', routerLink: ['/home/dashboard'], command: (event) => { this.onMenuClick('Home', '/home/dashboard'); }
            },
            {
                label: 'Employees', icon: 'fa fa-users', routerLink: ['/home/employees'], command: (event) => { this.onMenuClick('Employees', '/home/employees'); }
            },
            {
                label: 'Departments', icon: 'fa fa-sitemap', routerLink: ['/home/departments'], command: (event) => { this.onMenuClick('Departments', '/home/departments'); }
            },
            {
                label: 'About Us', icon: 'fa fa-info-circle', routerLink: ['/home/aboutus'], command: (event) => { this.onMenuClick('About us', '/home/aboutus'); }
            },
            {
                label: 'Contact Us', icon: 'fa fa-envelope', routerLink: ['/home/contactus'], command: (event) => { this.onMenuClick('Contact us', '/home/contactus'); }
            }
        ];
    }

    onMenuClick(title: string, path: string) {
        this.routeStateService.loadNewRouteState(title, path, null, true);
    }

}
