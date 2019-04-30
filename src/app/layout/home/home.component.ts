import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ToastService } from '../../core/services/toast.service';
import { LoaderService } from '../../core/services/loader.service';
import { ApplicationStateService } from '../../core/services/application-state.service';
import { CustomMenuItem } from '../../core/models/menu-item.model';
import { MenuDataService } from '../../core/services/menu-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnInit {

  isMobileResolution: boolean = false;

  menuItems: CustomMenuItem[];

  constructor(private toastService: ToastService, private loaderService: LoaderService,
    private applicationStateService: ApplicationStateService,
    private menuService: MenuDataService) {
    this.menuItems = menuService.getMenuList();
  }

  ngOnInit() {
    this.loaderService.display(true);
    this.toastService.addSingle("success", "", "Login successfully.");
    this.isMobileResolution = this.applicationStateService.getIsMobileResolution();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loaderService.display(false);
    }, 1000);
  }

}
