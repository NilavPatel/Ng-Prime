import { Injectable } from '@angular/core';
import { ViewData } from '../models/viewData.model';

@Injectable({
    providedIn: 'root',
})
export class ViewDataService {

    viewData: ViewData;

    constructor() {
        this.viewData = new ViewData();
    }

    getViewData(): ViewData {
        var viewData = {
            data: this.viewData.data,
            prevView: this.viewData.prevView,
            nextView: this.viewData.nextView,
            isViewDataSaved: this.viewData.isViewDataSaved
        };
        this.removeViewData();
        return viewData;
    }

    setViewData(data: ViewData) {
        this.viewData.data = data.data;
        this.viewData.prevView = data.prevView;
        this.viewData.nextView = data.nextView;
        this.viewData.isViewDataSaved = true;
        return;
    }

    removeViewData() {
        this.viewData.data = null;
        this.viewData.nextView = null;
        this.viewData.prevView = null;
        this.viewData.isViewDataSaved = false;
    }
}