import { Component, OnInit } from '@angular/core';
import { LoaderService } from './core/services/loader.service';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ng-Prime';
  showLoader: boolean;
  theme: string;

  constructor(private loaderService: LoaderService, private themeService: ThemeService) {
    this.theme = "dark-theme";
  }

  ngOnInit() {
    this.loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    });

    this.themeService.theme.subscribe((val: string) => {
      this.theme = val;
    });
  }
}
