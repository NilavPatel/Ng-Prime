import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouteStateService } from '../core/services/routeState.service';
import { ApplicationStateService } from '../core/services/application-state.service';
import { SessionService } from '../core/services/session.service';
import { NotificationService } from '../core/services/notification.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    items: MenuItem[];

    selectedItem: string;

    @Output() closeClicked = new EventEmitter<boolean>();

    isMobileResolution: boolean = false;

    constructor(private routeStateService: RouteStateService,
        private applicationStateService: ApplicationStateService,
        private sessionService: SessionService,
        private notificationService: NotificationService) { }

    ngOnInit() {
        this.items = [
            {
                label: 'Home', icon: 'fa fa-home', routerLink: '/home/dashboard'
            },
            {
                label: 'Employees', icon: 'fa fa-users', routerLink: '/home/employees'
            },
            {
                label: 'Departments', icon: 'fa fa-sitemap', routerLink: '/home/departments'
            },
            {
                label: 'About Us', icon: 'fa fa-info-circle', routerLink: '/home/aboutus'
            },
            {
                label: 'Contact Us', icon: 'fa fa-envelope', routerLink: '/home/contactus'
            },
            {
                label: 'Menu Level 1', icon: 'fa fa-cart-plus', items: [
                    { label: 'Menu Level 1.1', icon: 'fa fa-address-book' },
                    { label: 'Menu Level 1.2', icon: 'fa fa-id-card' }
                ]
            }
        ];

        this.isMobileResolution = this.applicationStateService.getIsMobileResolution();
        var activeMenu = this.sessionService.getSessionValue("active-menu");
        if (activeMenu) {
            this.selectedItem = activeMenu;
        } else {
            this.selectedItem = "Home";
        }
    }

    onMenuClick(title: string, path: string, event) {
        if(path == undefined || path == null || path == ""){
            this.notificationService.addSingle("success", "", title + " clicked !!!");
            return;
        }
        this.selectedItem = title;
        this.sessionService.setSessionValue("active-menu", title);
        this.routeStateService.loadNewRouteState(title, path, null, true);
        // hide menu bar after menu click for mobile layout
        if (this.isMobileResolution) {
            setTimeout(() => {
                this.closeClicked.emit(false);
            }, 300);
        }
    }

    toggleSubMenu(event) {
        var target = event.target;
        var subMenu;
        if (event.target.tagName == "DIV") {
            subMenu = target.parentElement.children[1];
        } else if (event.target.tagName == "I") {
            subMenu = target.parentElement.parentElement.children[1];
        }
        if (subMenu.style.display == "" || subMenu.style.display == "none") {
            subMenu.style.display = "block";
        } else {
            subMenu.style.display = "none";
        }
    }

}
