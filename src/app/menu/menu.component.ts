import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouteStateService } from '../services/routeState.service';

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
                label: 'Home', icon: 'fa fa-home', routerLink: ['/home/dashboard'], command: (event) => { this.onMenuClick('/home/dashboard'); }
            },
            {
                label: 'Employees', icon: 'fa fa-users', routerLink: ['/home/employees'], command: (event) => { this.onMenuClick('/home/employees'); }
            },
            {
                label: 'Departments', icon: 'fa fa-sitemap', routerLink: ['/home/departments'], command: (event) => { this.onMenuClick('/home/departments'); }
            },
            {
                label: 'About Us', icon: 'fa fa-info-circle', routerLink: ['/home/aboutus'], command: (event) => { this.onMenuClick('/home/aboutus'); }
            },
            {
                label: 'Contact Us', icon: 'fa fa-envelope', routerLink: ['/home/contactus'], command: (event) => { this.onMenuClick('/home/contactus'); }
            }
        ];
    }

    onMenuClick(path: string) {
        this.routeStateService.loadNewRouteState(path, null, true);
    }

}
