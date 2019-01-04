import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NotificationService } from '../core/services/notification.service';
import { LoaderService } from '../core/services/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnInit {

  constructor(private notificationService: NotificationService, private loaderService: LoaderService) { }

  ngOnInit() {
    this.loaderService.display(true);
    this.notificationService.addSingle("success", "", "Login successfully.");
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loaderService.display(false);
    }, 1000);
  }

}
