import { Injectable } from '@angular/core';
import { RouteState } from '../models/RouteState.model';
import { Router } from '@angular/router';

@Injectable()
export class RouteStateService {

    constructor(private router: Router) {
    }

    loadNewRouteState(title: string, path: string, data: any, isParent: boolean) {
        if (isParent) {
            this.removeAllRouteStates();
        }
        
        var routeStates = this.getFromStorage();

        var routeState = new RouteState();
        routeState.title = title;
        routeState.path = path;
        routeState.data = data;

        routeStates.push(routeState);
        this.saveToStorage(routeStates);
        this.navigate(routeState.path);
    }

    getCurrentRouteState(): RouteState {
        var routeStates = this.getFromStorage();
        return routeStates[routeStates.length - 1];
    }

    getAllRouteStates(): RouteState[] {
        var routeStates = this.getFromStorage();
        return routeStates;
    }

    loadPrevRouteState() {
        var routeStates = this.getFromStorage();
        routeStates.pop();
        this.saveToStorage(routeStates);
        var currentViewState = this.getCurrentRouteState();
        this.navigate(currentViewState.path);
    }

    removeAllRouteStates() {
        this.removeFromStorage();
    }

    private navigate(path: string) {
        this.router.navigate([path]);
    }

    loadRouteUptoId(id: number) {
        var result = [];
        var isFound = false;
        var routeStates = this.getFromStorage();
        routeStates.forEach(route => {
            if (isFound) {
                return;
            }
            result.push(route);
            if (route.id === id) {
                isFound = true;
            }
        });
        routeStates = result;
        this.saveToStorage(routeStates);
        var currentViewState = this.getCurrentRouteState();
        this.navigate(currentViewState.path);
    }

    saveToStorage(routeStates: any) {
        localStorage.setItem("routeState", JSON.stringify(routeStates));
    }

    getFromStorage() {
        var routeStates = JSON.parse(localStorage.getItem("routeState"));
        return (routeStates === undefined || routeStates === null) ? [] : routeStates;
    }

    removeFromStorage() {
        localStorage.removeItem("routeState");
    }

}