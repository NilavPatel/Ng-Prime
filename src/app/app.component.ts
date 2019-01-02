import { Component, OnInit } from '@angular/core';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ng-Prime';
  showLoader: boolean;
  isDarkTheme: boolean;

  constructor(private loaderService: LoaderService) {
    this.isDarkTheme = true;
  }

  ngOnInit() {
    this.loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    });
  }

  selectTheme(theme) {
    if (theme === 'dark') {
      this.isDarkTheme = true;
    }
    else {
      this.isDarkTheme = false;
    }
  }
}
