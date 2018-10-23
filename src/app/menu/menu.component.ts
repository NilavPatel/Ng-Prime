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
                label: 'Home', icon: 'pi pi-fw pi-caret-right', routerLink: ['/home/dashboard']
            },
            {
                label: 'Employees', icon: 'pi pi-fw pi-caret-right', routerLink: ['/home/employees']
            },
            {
                label: 'Departments', icon: 'pi pi-fw pi-caret-right', routerLink: ['/home/departments']
            },
            {
                label: 'About Us', icon: 'pi pi-fw pi-caret-right', routerLink: ['/home/aboutus']
            },
            {
                label: 'Contact Us', icon: 'pi pi-fw pi-caret-right', routerLink: ['/home/contactus']
            }
        ];
    }
}
