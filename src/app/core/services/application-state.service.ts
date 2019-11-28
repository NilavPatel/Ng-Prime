import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
/**
 * application state service
 */
export class ApplicationStateService {

  private isMobileResolution: boolean;

  constructor() {
    if (window.innerWidth <= 992) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
  }

  /**
   * get is mobile resolution or desktop.
   * need to refresh after changing website resolution
   */
  public getIsMobileResolution(): boolean {
    return this.isMobileResolution;
  }
}