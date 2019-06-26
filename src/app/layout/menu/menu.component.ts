import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { RouteStateService } from '../../core/services/route-state.service';
import { SessionService } from '../../core/services/session.service';
import { ToastService } from '../../core/services/toast.service';
import { CustomMenuItem } from '../../core/models/menu-item.model';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    @Input() items: CustomMenuItem[];

    @Input() className: string;

    selectedItem: string;

    @Output() closeClicked = new EventEmitter<boolean>();

    constructor(private routeStateService: RouteStateService,
        private sessionService: SessionService,
        private toastService: ToastService) { }

    ngOnInit() {
        var activeMenu = this.sessionService.getItem("active-menu");
        if (activeMenu) {
            this.selectedItem = activeMenu;
        } else {
            this.selectedItem = "Home";
        }
    }

    // on menu click event
    onMenuClick(menu: CustomMenuItem) {
        // if child are available then open child
        if (menu.Childs != undefined || menu.Childs != null) {
            this.toggleSubMenu(menu);
            return;
        }
        if (menu.RouterLink == undefined || menu.RouterLink == null || menu.RouterLink == "") {
            this.toastService.addSingle("error", "", "404 Page not found.");
            return;
        }
        this.selectedItem = menu.Label;
        this.sessionService.setItem("active-menu", menu.Label);
        this.routeStateService.add(menu.Label, menu.RouterLink, null, true);
        // hide menu bar after menu click for mobile layout        
        setTimeout(() => {
            this.closeClicked.emit(false);
        }, 100);
    }

    // toggle sub menu on click
    toggleSubMenu(menu: CustomMenuItem) {
        menu.IsChildVisible = !menu.IsChildVisible;
    }

}
