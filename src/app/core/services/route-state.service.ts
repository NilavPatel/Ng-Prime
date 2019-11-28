import { Injectable } from '@angular/core';
import { RouteState } from 'src/app/core/models/route-state.model';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
/**
 * Route state service
 * Save all route data, helps to navigate routes
 */
export class RouteStateService {

    constructor(private router: Router) {
    }

    /**
     * get current route data
     */
    getCurrent(): RouteState {
        var routeStates = this.getFromStorage();
        return routeStates[routeStates.length - 1];
    }

    /**
     * get all route data
     */
    getAll(): RouteState[] {
        var routeStates = this.getFromStorage();
        return routeStates;
    }

    /**
     * add route data
     * @param title route name
     * @param path route path
     * @param data route data
     * @param isParent is parent route
     */
    add(title: string, path: string, data: any, isParent: boolean) {
        if (isParent) {
            this.removeAll();
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

    /**
     * load previous route
     */
    loadPrevious() {
        var routeStates = this.getFromStorage();
        routeStates.pop();
        this.saveToStorage(routeStates);
        var currentViewState = this.getCurrent();
        this.navigate(currentViewState.path);
    }

    /**
     * 
     * @param id load route route id
     */
    loadById(id: number) {
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
        var currentViewState = this.getCurrent();
        this.navigate(currentViewState.path);
    }

    /**
     * remove all route data
     */
    removeAll() {
        this.removeFromStorage();
    }

    private saveToStorage(routeStates: any) {
        localStorage.setItem("routeState", JSON.stringify(routeStates));
    }

    private getFromStorage() {
        var routeStates = JSON.parse(localStorage.getItem("routeState"));
        return (routeStates === undefined || routeStates === null) ? [] : routeStates;
    }

    private removeFromStorage() {
        localStorage.removeItem("routeState");
    }

    private navigate(path: string) {
        this.router.navigate([path]);
    }

}