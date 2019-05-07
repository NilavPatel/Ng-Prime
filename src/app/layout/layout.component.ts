import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ToastService } from '../core/services/toast.service';
import { LoaderService } from '../core/services/loader.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements AfterViewInit, OnInit {

  constructor(private toastService: ToastService, private loaderService: LoaderService) {
  }

  ngOnInit() {
    this.loaderService.display(true);
    this.toastService.addSingle("success", "", "Login successfully.");
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loaderService.display(false);
    }, 1000);
  }

}
