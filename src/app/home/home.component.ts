import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AlertService } from '../core/services/alert.service';
import { LoaderService } from '../core/services/loader.service';
import { ApplicationStateService } from '../core/services/application-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnInit {

  isMobileResolution: boolean = false;

  constructor(private alertService: AlertService, private loaderService: LoaderService, private applicationStateService: ApplicationStateService) { }

  ngOnInit() {
    this.loaderService.display(true);
    this.alertService.addSingle("success", "", "Login successfully.");
    this.isMobileResolution = this.applicationStateService.getIsMobileResolution();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loaderService.display(false);
    }, 1000);
  }

}
