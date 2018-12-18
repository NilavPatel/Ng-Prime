import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RouteStateService } from '../services/routeState.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private routeStateService: RouteStateService) { }

  ngOnInit() {
  }

  logout() {
    this.routeStateService.removeAllRouteStates();
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

}
