import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { RouteStateService } from '../core/services/routeState.service';
import { SessionService } from '../core/services/session.service';
import { User } from '../core/models/user.model';
import { notification } from '../core/models/notification.model';
import { UserIdleService } from 'angular-user-idle';
import { ThemeService } from '../core/services/theme.service';
import { ApplicationStateService } from '../core/services/application-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User;

  displayNotifications: boolean;

  notifications: notification[];

  isMenuVisible: boolean;

  isMobileResolution: boolean = false;

  displaySidebarMenu: boolean = false;

  constructor(
    private router: Router,
    private routeStateService: RouteStateService,
    private sessionService: SessionService,
    private userIdle: UserIdleService,
    private renderer: Renderer2,
    private themeService: ThemeService,
    private applicationStateService: ApplicationStateService) {
    this.displayNotifications = false;
    this.isMenuVisible = true;
  }

  ngOnInit() {
    this.user = this.sessionService.getSessionValue("currentUser");
    this.notifications = [];
    for (var i = 1; i <= 5; i++) {
      var notificationObj = new notification("Message " + i, new Date(), null)
      this.notifications.push(notificationObj);
    }

    //Start watching for user inactivity.
    this.userIdle.startWatching();

    // Start watching when user idle is starting.
    this.userIdle.onTimerStart().subscribe();

    // Start watch when time is up.
    this.userIdle.onTimeout().subscribe(() => {
      this.logout();
    });

    this.isMobileResolution = this.applicationStateService.getIsMobileResolution();

    var selectedTheme = this.sessionService.getSessionValue("selected-theme");
    if(selectedTheme){
      this.selectTheme(selectedTheme);
    }
  }

  logout() {
    this.userIdle.stopWatching();
    this.routeStateService.removeAllRouteStates();
    this.sessionService.removeSessionValue('currentUser');
    this.router.navigate(['/login']);
  }

  showNotificationSidebar() {
    this.displayNotifications = true;
  }

  toggleMenu() {
    if (this.isMobileResolution) {
      this.displaySidebarMenu = !this.displaySidebarMenu;
      return;
    }

    this.isMenuVisible = !this.isMenuVisible;
    const menuElement: HTMLElement = document.getElementById('navigation-menu');
    if (this.isMenuVisible) {
      this.renderer.setStyle(menuElement, 'flex', '2');
    } else {
      this.renderer.setStyle(menuElement, 'flex', '0');
    }
  }

  selectTheme(theme: string) {
    this.sessionService.setSessionValue("selected-theme", theme);
    this.themeService.selectTheme(theme);
  }

}
