import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RouteStateService } from '../services/routeState.service';
import { SessionService } from '../services/session.service';
import { User } from '../models/user.model';
import { notification } from '../models/notification.model';
import { UserIdleService } from 'angular-user-idle';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User;

  displayNotifications: boolean;

  notifications: notification[];

  constructor(
    private router: Router,
    private routeStateService: RouteStateService,
    private sessionService: SessionService,
    private userIdle: UserIdleService) {
    this.displayNotifications = false;
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

}
