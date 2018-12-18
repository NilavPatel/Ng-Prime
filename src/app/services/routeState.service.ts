import { Injectable } from '@angular/core';
import { RouteState } from '../models/RouteState.model';
import { Router } from '@angular/router';

@Injectable()
export class RouteStateService {
    routeStates: RouteState[];

    constructor(private router: Router) {
        this.routeStates = [];
    }

    pushParentRouteState(routeState: RouteState) {
        this.removeAllRouteStates();
        this.routeStates.push(routeState);
        this.goToView(routeState.viewName);
    }

    pushRouteState(routeState: RouteState) {
        this.routeStates.push(routeState);
        this.goToView(routeState.viewName);
    }

    sliceRouteStateUpto(id: number) {
        var index;
        for (var i = 0; this.routeStates.length; i++) {
            if (this.routeStates[i].id === id) {
                index = i;
                break;
            }
        }
        if (i) {
            this.routeStates = this.routeStates.slice(0, index + 1);
        }
        var currentViewState = this.getCurrentRouteState();
        this.goToView(currentViewState.viewName);
    }

    private removeAllRouteStates() {
        this.routeStates = [];
    }

    goToView(path: string) {
        this.router.navigate([path]);
    }

    getCurrentRouteState(): RouteState {
        return this.routeStates[this.routeStates.length - 1];
    }

    back() {
        this.routeStates.pop();
        var currentViewState = this.getCurrentRouteState();
        this.goToView(currentViewState.viewName);
    }

}