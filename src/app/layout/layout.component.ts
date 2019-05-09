import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ToastService } from '../core/services/toast.service';
import { LoaderService } from '../core/services/loader.service';
import { MenuDataService } from '../core/services/menu-data.service';
import { CustomMenuItem } from '../core/models/menu-item.model';
import { Sidebar } from 'primeng/sidebar';
import { ApplicationStateService } from '../core/services/application-state.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements AfterViewInit, OnInit {

  menuItems: CustomMenuItem[];

  isMenuVisible: boolean;

  isMobileResolution: boolean = false;

  @ViewChild("menubar") menubar: Sidebar;

  constructor(private toastService: ToastService,
    private loaderService: LoaderService,
    private menuDataService: MenuDataService,
    private applicationStateService: ApplicationStateService) {
  }

  ngOnInit() {
    this.loaderService.display(true);
    this.toastService.addSingle("success", "", "Login successfully.");
    this.menuItems = this.menuDataService.getMenuList();
    this.isMobileResolution = this.applicationStateService.getIsMobileResolution();
    if (this.isMobileResolution) {
      this.isMenuVisible = false;
    }
    else {
      this.isMenuVisible = true;
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loaderService.display(false);
    }, 1000);
  }

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible
  }

}
