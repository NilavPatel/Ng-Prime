import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RouteStateService } from '../core/services/routeState.service';
import { ApplicationStateService } from '../core/services/application-state.service';
import { SessionService } from '../core/services/session.service';
import { NotificationService } from '../core/services/notification.service';
import { CustomMenuItem } from '../core/models/menuItem.model';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    items: CustomMenuItem[];

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
                Label: 'Home', Icon: 'fa fa-home', RouterLink: '/home/dashboard', Childs: null, IsChildVisible: false
            },
            {
                Label: 'Employees', Icon: 'fa fa-users', RouterLink: '/home/employees', Childs: null, IsChildVisible: false
            },
            {
                Label: 'Departments', Icon: 'fa fa-sitemap', RouterLink: '/home/departments', Childs: null, IsChildVisible: false
            },
            {
                Label: 'About Us', Icon: 'fa fa-info-circle', RouterLink: '/home/aboutus', Childs: null, IsChildVisible: false
            },
            {
                Label: 'Contact Us', Icon: 'fa fa-envelope', RouterLink: '/home/contactus', Childs: null, IsChildVisible: false
            },
            {
                Label: 'Menu Level 1', Icon: 'fa fa-cart-plus', RouterLink: null, Childs: [
                    { Label: 'Menu Level 1.1', Icon: 'fa fa-address-book', RouterLink: null, Childs: null, IsChildVisible: false },
                    { Label: 'Menu Level 1.2', Icon: 'fa fa-id-card', RouterLink: null, Childs: null, IsChildVisible: false }
                ], IsChildVisible: false
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

    // on menu click event
    onMenuClick(title: string, path: string) {
        if (path == undefined || path == null || path == "") {
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

    // toggle sub menu on click
    toggleSubMenu(menu) {
        menu.IsChildVisible = !menu.IsChildVisible;
    }

}
