import { Injectable } from '@angular/core';
import { RouteState } from '../models/RouteState.model';
import { Router } from '@angular/router';

@Injectable()
export class RouteStateService {
    routeStates: RouteState[];

    constructor(private router: Router) {
        this.routeStates = [];
    }

    loadNewRouteState(viewName: string, data: any, isParent: boolean) {
        var routeState = new RouteState();
        routeState.viewName = viewName;
        routeState.data = data;

        if (isParent) {
            this.removeAllRouteStates();
        }
        this.routeStates.push(routeState);
        this.navigate(routeState.viewName);
    }

    getCurrentRouteState(): RouteState {
        return this.routeStates[this.routeStates.length - 1];
    }

    loadPrevRouteState() {
        this.routeStates.pop();
        var currentViewState = this.getCurrentRouteState();
        this.navigate(currentViewState.viewName);
    }

    removeAllRouteStates() {
        this.routeStates = [];
    }

    private navigate(path: string) {
        this.router.navigate([path]);
    }

}