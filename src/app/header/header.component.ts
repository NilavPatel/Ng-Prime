import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RouteStateService } from '../services/routeState.service';
import { SessionService } from '../services/session.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User;

  constructor(
    private router: Router,
    private routeStateService: RouteStateService,
    private sessionService: SessionService) { }

  ngOnInit() {
    this.user = this.sessionService.getSessionValue("currentUser");
  }

  logout() {
    this.routeStateService.removeAllRouteStates();
    this.sessionService.removeSessionValue('currentUser');
    this.router.navigate(['/login']);
  }

}
